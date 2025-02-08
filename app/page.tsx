import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "../components/Hero";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex-justify-center items-center flex-col mx-auto sm:px-10 overflow-clip">
      <div>
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
