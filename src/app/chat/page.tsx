"use client"

import Header from '@/components/Header';
import InputBar from '@/components/InputBar';
import MessageArea from '@/components/MessageArea';
import React, { useState } from 'react';

interface SearchInfo {
  stages: string[];
  query: string;
  urls: string[];
}

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  type: string;
  isLoading?: boolean;
  searchInfo?: SearchInfo;
}

const Home = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: 'Hi there, how can I help you?',
      isUser: false,
      type: 'message'
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [checkpointId, setCheckpointId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      // First add the user message to the chat
      const newMessageId = messages.length > 0 ? Math.max(...messages.map(msg => msg.id)) + 1 : 1;

      setMessages(prev => [
        ...prev,
        {
          id: newMessageId,
          content: currentMessage,
          isUser: true,
          type: 'message'
        }
      ]);

      const userInput = currentMessage;
      setCurrentMessage(""); // Clear input field immediately

      try {
        // Create AI response placeholder
        const aiResponseId = newMessageId + 1;
        setMessages(prev => [
          ...prev,
          {
            id: aiResponseId,
            content: "",
            isUser: false,
            type: 'message',
            isLoading: true,
            searchInfo: {
              stages: [],
              query: "",
              urls: []
            }
          }
        ]);

        // Create URL with checkpoint ID if it exists
        let url = `https://api.aisearch.fbadevishant.qzz.io/chat_stream/${encodeURIComponent(userInput)}`;
        if (checkpointId) {
          url += `?checkpoint_id=${encodeURIComponent(checkpointId)}`;
        }

        // Use fetch with ReadableStream instead of EventSource to support custom headers
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ADMIN_API_KEY}`,
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let streamedContent = "";
        let searchData = null;
        let buffer = "";

        if (!reader) {
          throw new Error("Response body is not readable");
        }

        // Read the stream
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) break;

          // Decode the chunk and add to buffer
          buffer += decoder.decode(value, { stream: true });
          
          // Process complete SSE messages in buffer
          const lines = buffer.split('\n');
          buffer = lines.pop() || ""; // Keep incomplete line in buffer

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const dataStr = line.slice(6); // Remove 'data: ' prefix
              
              if (dataStr === '[DONE]') {
                // Stream complete
                if (searchData) {
                  const finalSearchInfo = {
                    ...searchData,
                    stages: [...searchData.stages, 'writing']
                  };

                  setMessages(prev =>
                    prev.map(msg =>
                      msg.id === aiResponseId
                        ? { ...msg, searchInfo: finalSearchInfo, isLoading: false }
                        : msg
                    )
                  );
                }
                continue;
              }

              try {
                const data = JSON.parse(dataStr);

                if (data.type === 'checkpoint') {
                  // Store the checkpoint ID for future requests
                  setCheckpointId(data.checkpoint_id);
                }
                else if (data.type === 'content') {
                  streamedContent += data.content;

                  // Update message with accumulated content
                  setMessages(prev =>
                    prev.map(msg =>
                      msg.id === aiResponseId
                        ? { ...msg, content: streamedContent, isLoading: false }
                        : msg
                    )
                  );
                }
                else if (data.type === 'search_start') {
                  // Create search info with 'searching' stage
                  const newSearchInfo = {
                    stages: ['searching'],
                    query: data.query,
                    urls: []
                  };
                  searchData = newSearchInfo;

                  // Update the AI message with search info
                  setMessages(prev =>
                    prev.map(msg =>
                      msg.id === aiResponseId
                        ? { ...msg, content: streamedContent, searchInfo: newSearchInfo, isLoading: false }
                        : msg
                    )
                  );
                }
                else if (data.type === 'search_results') {
                  try {
                    // Parse URLs from search results
                    const urls = typeof data.urls === 'string' ? JSON.parse(data.urls) : data.urls;

                    // Update search info to add 'reading' stage (don't replace 'searching')
                    const newSearchInfo = {
                      stages: searchData ? [...searchData.stages, 'reading'] : ['reading'],
                      query: searchData?.query || "",
                      urls: urls
                    };
                    searchData = newSearchInfo;

                    // Update the AI message with search info
                    setMessages(prev =>
                      prev.map(msg =>
                        msg.id === aiResponseId
                          ? { ...msg, content: streamedContent, searchInfo: newSearchInfo, isLoading: false }
                          : msg
                      )
                    );
                  } catch (err) {
                    console.error("Error parsing search results:", err);
                  }
                }
                else if (data.type === 'search_error') {
                  // Handle search error
                  const newSearchInfo = {
                    stages: searchData ? [...searchData.stages, 'error'] : ['error'],
                    query: searchData?.query || "",
                    error: data.error,
                    urls: []
                  };
                  searchData = newSearchInfo;

                  setMessages(prev =>
                    prev.map(msg =>
                      msg.id === aiResponseId
                        ? { ...msg, content: streamedContent, searchInfo: newSearchInfo, isLoading: false }
                        : msg
                    )
                  );
                }
                else if (data.type === 'end') {
                  // When stream ends, add 'writing' stage if we had search info
                  if (searchData) {
                    const finalSearchInfo = {
                      ...searchData,
                      stages: [...searchData.stages, 'writing']
                    };

                    setMessages(prev =>
                      prev.map(msg =>
                        msg.id === aiResponseId
                          ? { ...msg, searchInfo: finalSearchInfo, isLoading: false }
                          : msg
                      )
                    );
                  }
                }
              } catch (error) {
                console.error("Error parsing event data:", error, dataStr);
              }
            }
          }
        }

        // Mark as not loading when stream completes
        setMessages(prev =>
          prev.map(msg =>
            msg.id === aiResponseId
              ? { ...msg, isLoading: false }
              : msg
          )
        );

      } catch (error) {
        console.error("Error with fetch stream:", error);
        setMessages(prev => [
          ...prev,
          {
            id: newMessageId + 1,
            content: "Sorry, there was an error connecting to the server.",
            isUser: false,
            type: 'message',
            isLoading: false
          }
        ]);
      }
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-8 px-4">
      {/* Main container with refined shadow and border */}
      <div className="w-[70%] bg-white flex flex-col rounded-xl shadow-lg border border-gray-100 overflow-hidden h-[90vh]">
        <Header />
        <MessageArea messages={messages} />
        <InputBar currentMessage={currentMessage} setCurrentMessage={setCurrentMessage} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Home;
