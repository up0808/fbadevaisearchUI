import { Benefits } from "./sections/Benefits";
import { FAQ } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Sponsors } from "./sections/Investors";
import { Testimonials } from "./sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Hero id="top" />
      <Benefits id="benefits" />
      <Sponsors id="investors" />
      <Testimonials id="testimonials" />
      <FAQ id="faq" />
      <Footer />
    </div>
  );
}
