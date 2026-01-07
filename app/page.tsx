import HeroSection from "@/components/hero-section"
import DisclaimerSection from "@/components/disclaimer-section"
import WorkflowSection from "@/components/workflow-section"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <DisclaimerSection />
      <WorkflowSection />      
    </main>
  )
}
