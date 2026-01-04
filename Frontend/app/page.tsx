import HeroSection from "@/components/hero-section"
import DisclaimerSection from "@/components/disclaimer-section"
import ModelInfoSection from "@/components/model-info-section"
import WorkflowSection from "@/components/workflow-section"
import ChartsSection from "@/components/charts-section"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <DisclaimerSection />
      <ModelInfoSection />
      <WorkflowSection />
      <ChartsSection />
      <Footer />
    </main>
  )
}
