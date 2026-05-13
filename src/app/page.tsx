import { Hero } from "@/components/home/hero";
import { ProofStrip } from "@/components/home/proof-strip";
import { ProblemSection } from "@/components/home/problem-section";
import { SolutionsOverview } from "@/components/home/solutions-overview";
import { PlatformComparison } from "@/components/home/platform-comparison";
import { Industries } from "@/components/home/industries";
import { Process } from "@/components/home/process";
import { CaseStudies } from "@/components/home/case-studies";
import { Testimonials } from "@/components/home/testimonials";
import { AboutSamuel } from "@/components/home/about-samuel";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <ProblemSection />
      <SolutionsOverview />
      <PlatformComparison />
      <Industries />
      <Process />
      <CaseStudies />
      <Testimonials />
      <AboutSamuel />
      <FinalCTA />
    </>
  );
}
