// import Image from "next/image";
import ClientNavbar from "@/clientComponents/ClientNavbar";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Pricing from "@/components/Pricing";
import Prototyping from "@/components/Prototyping";

export default function Home() {
  return (
    <>
      <Introduction />
      <Features />
      <Prototyping />
      <Pricing />
      <Contact />
      <Footer />
      <ClientNavbar />
    </>
  );
}
