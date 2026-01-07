"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PreprocessingImageSection() {
  const [view, setView] = useState<"before" | "after">("before")

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            Preprocessing Visualization
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Boxplots and histograms showing the effect of preprocessing steps
            such as age conversion, IQR-based outlier handling, and blood
            pressure correction.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4">
          <Button
            variant={view === "before" ? "default" : "outline"}
            onClick={() => setView("before")}
          >
            Before Preprocessing
          </Button>

          <Button
            variant={view === "after" ? "default" : "outline"}
            onClick={() => setView("after")}
          >
            After Preprocessing
          </Button>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4 bg-white text-black">
            <h3 className="text-lg font-semibold mb-3">
              Boxplot ({view === "before" ? "Before" : "After"})
            </h3>
            <Image
              src={
                view === "before"
                  ? "/preprocessing/before-boxplot.png"
                  : "/preprocessing/after-boxplot.png"
              }
              alt="Boxplot visualization"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </Card>

          <Card className="p-4 bg-white text-black">
            <h3 className="text-lg font-semibold mb-3">
              Histogram ({view === "before" ? "Before" : "After"})
            </h3>
            <Image
              src={
                view === "before"
                  ? "/preprocessing/before-histogram.png"
                  : "/preprocessing/after-histogram.png"
              }
              alt="Histogram visualization"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </Card>
        </div>

        {/* Explanation */}
        <Card className="p-6 bg-primary/5 border-primary/20">
          <h3 className="text-2xl font-bold mb-3">
            Interpretation
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Prior to preprocessing, the dataset exhibits extreme outliers and
            skewed distributions, particularly in blood pressure features.
            After applying IQR-based capping and correcting systolic–diastolic
            inconsistencies, the data becomes more compact, medically valid,
            and suitable for machine learning without removing any records.
          </p>
        </Card>

      </div>
    </section>
  )
}
