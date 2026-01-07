"use client"

import { Card } from "@/components/ui/card"
import { Database, Filter, Zap, BarChart3, CheckCircle } from "lucide-react"

export default function PreprocessingSection() {
  const preprocessingSteps = [
    {
        icon: Database,
        number: "01",
        title: "Dataset Overview",
        description:
        "The dataset consists of 70,000 patient records collected from the Kaggle Cardiovascular Disease Dataset.",
        details: [
        "Structured tabular medical data",
        "Demographic and clinical attributes",
        "Binary cardiovascular disease label",
        "No missing values in raw dataset",
        ],
    },
    {
        icon: Filter,
        number: "02",
        title: "Age Transformation",
        description:
        "The age feature was originally provided in days and converted into years for better interpretability and medical relevance.",
        details: [
        "Age converted from days to years",
        "Improves model readability",
        "Preserves original information",
        "No data points removed",
        ],
    },
    {
        icon: BarChart3,
        number: "03",
        title: "Initial Data Distribution Analysis",
        description:
        "Exploratory visualizations were generated to analyze outliers and feature distributions before preprocessing.",
        details: [
        "Boxplots for outlier detection",
        "Histograms for distribution analysis",
        "Applied to age, height, weight",
        "Blood pressure feature analysis",
        ],
    },
    {
        icon: Zap,
        number: "04",
        title: "Outlier Handling using IQR Method",
        description:
        "Outliers were handled using the Interquartile Range (IQR) method without removing any records from the dataset.",
        details: [
        "Q1 and Q3 calculated for each feature",
        "IQR-based minimum and maximum bounds",
        "Values capped instead of removed",
        "Applied to five numerical features",
        ],
    },
    {
        icon: CheckCircle,
        number: "05",
        title: "Blood Pressure Consistency Correction",
        description:
        "Logical validation was applied to blood pressure readings to ensure medical correctness.",
        details: [
        "Identified rows where ap_hi < ap_lo",
        "1,234 inconsistent records found",
        "Systolic and diastolic values swapped",
        "No rows deleted during correction",
        ],
    },
    ]


  return (
    <section className="py-20 container mx-auto px-4 bg-accent/5">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold">
            Dataset Preparation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Data Preprocessing Pipeline</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            A comprehensive 5-step process to transform raw data into high-quality features for machine learning
          </p>
        </div>

        {/* Preprocessing Steps */}
        <div className="space-y-6">
          {preprocessingSteps.map((step, index) => (
            <Card
              key={index}
              className="border-accent/20 hover:border-accent/50 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Left Side - Number and Icon */}
                  <div className="flex items-start gap-4 min-w-fit">
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-4xl font-bold text-accent/30">{step.number}</div>
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <step.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress Line */}
                {index < preprocessingSteps.length - 1 && (
                  <div className="mt-6 h-0.5 bg-gradient-to-r from-accent/50 via-accent/20 to-transparent" />
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Technical Details */}
        <Card className="border-accent/20 bg-card/50">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Libraries & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Data Processing
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pandas - Data manipulation and cleaning</li>
                  <li>• NumPy - Numerical computations</li>
                  <li>• Matplotlib - Data Visualization</li>
                  <li>• Seaborn - Data Visualization</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Quality Assurance
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• IQR-based statistical analysis</li>
                    <li>• Distribution validation using histograms</li>
                    <li>• Medical rule-based consistency checks</li>
                </ul>

              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
