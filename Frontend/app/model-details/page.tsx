import ChartsSection from "@/components/charts-section"
import ModelInfoSection from "@/components/model-info-section"
import PreprocessingSection from "@/components/preprocessing-section"
import PreprocessingVisualizationSection from "@/components/PreprocessingVisualizationSection"
import Link from "next/link"
import {ArrowLeft, Heart} from "lucide-react"
import ModelTrainingSection from "@/components/ModelTrainingSection"

export default function ModelDetailsPage() {
  return (
    <>
    <div className="border-b border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CardioPredict AI</span>
          </div>
        </div>
      </div>
    <main className="min-h-screen">
          <ModelInfoSection />
          <PreprocessingSection/>
          <PreprocessingVisualizationSection/>
          <ModelTrainingSection/>
          <ChartsSection />   
    </main>
    </>
  )
}
