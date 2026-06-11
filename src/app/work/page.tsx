import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WorkPageContent } from "@/components/work/WorkPageContent";

export const metadata: Metadata = {
  title: "Website & App Examples",
  description:
    "Explore website and web app examples by EKC Digital — built for small businesses, startups, and growing brands.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <WorkPageContent />
      </main>
      <Footer />
    </>
  );
}
