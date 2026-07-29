import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar activePath="/" />
      <main className="flex-1" />
      <Footer />
    </>
  );
}
