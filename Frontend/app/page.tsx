import HeroSection from "@/components/hero-section"
import DisclaimerSection from "@/components/disclaimer-section"
import WorkflowSection from "@/components/workflow-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DisclaimerSection />
      <WorkflowSection />      
    </main>
  )
}
