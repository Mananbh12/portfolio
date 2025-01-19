import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "../components/Hero";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex-justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div>
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
