import { Contact } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div className="h-screen  ">
      {/* <div className="grid grid-cols-2 h-full">
        <div className="bg-green-500">01</div>
        <div className="bg-yellow-400">02</div>
      </div> */}
      <Hero />
      <Contact />
      <Service />
      <Footer />
    </div>
  );
}
