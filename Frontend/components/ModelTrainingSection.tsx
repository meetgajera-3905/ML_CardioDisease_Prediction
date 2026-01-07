"use client"

import { Card } from "@/components/ui/card"
import {
  Brain,
  Split,
  Scale,
  Activity,
  BarChart3,
  Save,
  SlidersHorizontal 
} from "lucide-react"

export default function ModelTrainingSection() {
  const steps = [
    {
        step: "01",
        title: "Feature & Target Separation",
        icon: Brain,
        description:
        "The preprocessed dataset is divided into input features (X) and target labels (y), where the target represents the presence or absence of cardiovascular disease.",
    },
    {
        step: "02",
        title: "Train–Test Split",
        icon: Split,
        description:
        "The dataset is split into training and testing sets using stratified sampling to preserve class distribution and prevent data leakage.",
    },
    {
        step: "03",
        title: "SMOTE Class Balancing",
        icon: Scale,
        description:
        "Synthetic Minority Over-sampling Technique (SMOTE) is applied only on the training data to balance class distribution and reduce prediction bias.",
    },
    {
        step: "04",
        title: "Feature Normalization (RobustScaler)",
        icon: SlidersHorizontal,
        description:
            "Numerical features are normalized using RobustScaler, which scales data based on median and interquartile range (IQR), ensuring robustness against remaining outliers.",
        },

    {
        step: "05",
        title: "Model Training",
        icon: Activity,
        description:
        "A supervised machine learning classification model is trained on the balanced and scaled training data to learn cardiovascular risk patterns.",
    },
    {
        step: "06",
        title: "Model Evaluation",
        icon: BarChart3,
        description:
        "The trained model is evaluated on unseen test data using accuracy, precision, recall, F1-score, and ROC-AUC metrics.",
    },
    {
        step: "07",
        title: "Model Saving & Deployment",
        icon: Save,
        description:
        "The final trained model is serialized and integrated into the FastAPI backend to enable real-time cardiovascular risk prediction.",
    },
    ]


  return (
    <section className="py-20 container mx-auto px-4 bg-accent/5">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold">
            Model Development
          </div>
          <h2 className="text-4xl font-bold">
            Model Training Pipeline
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Structured steps followed to train, evaluate, and deploy the
            cardiovascular disease prediction model.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((item, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 border-accent/20 hover:border-accent/40 transition"
            >
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-accent/30">
                    {item.step}
                  </span>
                  <div className="mt-2 p-3 rounded-lg bg-accent/10">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
