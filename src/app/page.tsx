import { Hero } from "@/components/home/hero";
import { ProofStrip } from "@/components/home/proof-strip";
import { PlatformsStrip } from "@/components/home/platforms-strip";
import { ProblemSection } from "@/components/home/problem-section";
import { SolutionsOverview } from "@/components/home/solutions-overview";
import { PlatformComparison } from "@/components/home/platform-comparison";
import { Industries } from "@/components/home/industries";
import { Process } from "@/components/home/process";
import { CaseStudies } from "@/components/home/case-studies";
import { Testimonials } from "@/components/home/testimonials";
import { ThirdPartyReviews } from "@/components/home/third-party-reviews";
import { AboutSamuel } from "@/components/home/about-samuel";
import { FinalCTA } from "@/components/home/final-cta";
import { Faq } from "@/components/ui/faq";
import { homeFaqs } from "@/data/faqs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <PlatformsStrip />
      <ProblemSection />
      <SolutionsOverview />
      <PlatformComparison />
      <Industries />
      <Process />
      <CaseStudies />
      <Testimonials />
      <ThirdPartyReviews />
      <AboutSamuel />
      <Faq items={homeFaqs} heading="Common questions, answered plainly." />
      <FinalCTA />
    </>
  );
}
