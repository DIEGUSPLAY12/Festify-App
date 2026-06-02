import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { Features } from "@/components/sections/Features";
import { DesignSystemSection } from "@/components/sections/DesignSystemSection";
import { DesignGallery } from "@/components/sections/DesignGallery";
import { TechStack } from "@/components/sections/TechStack";
import { Architecture } from "@/components/sections/Architecture";
import { DataModel } from "@/components/sections/DataModel";
import { ApiReference } from "@/components/sections/ApiReference";
import { Pricing } from "@/components/sections/Pricing";
import { Roadmap } from "@/components/sections/Roadmap";
import { Privacy } from "@/components/sections/Privacy";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <MobileNav />
        <main className="flex-1 lg:pl-0 mt-14 lg:mt-0">
          <Hero />
          <Concept />
          <Features />
          <DesignSystemSection />
          <DesignGallery />
          <TechStack />
          <Architecture />
          <DataModel />
          <ApiReference />
          <Pricing />
          <Roadmap />
          <Privacy />
        </main>
        <Footer />
      </div>
    </div>
  );
}
