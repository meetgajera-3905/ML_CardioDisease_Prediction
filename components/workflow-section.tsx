import { Card } from "@/components/ui/card"
import { FileInput, BarChart3, Brain, Sparkles } from "lucide-react"

export default function WorkflowSection() {
  const steps = [
    {
      icon: FileInput,
      number: "01",
      title: "Data Input",
      description:
        "Patient health metrics are collected including age, blood pressure, cholesterol levels, glucose values, and lifestyle-related factors",
    },
    {
      icon: BarChart3,
      number: "02",
      title: "Preprocessing",
      description:
        "Input data is cleaned, encoded, scaled, and validated using standard preprocessing techniques to ensure consistency and model readiness",
    },
    {
      icon: Brain,
      number: "03",
      title: "ML Algorithm",
      description:
        "A machine learning model built using scikit-learn algorithms processes the input features through a trained prediction pipeline",
    },
    {
      icon: Sparkles,
      number: "04",
      title: "Risk Prediction",
      description:
        "The trained model outputs cardiovascular disease risk probability along with interpretable prediction confidence",
    },
  ]


  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Prediction Workflow</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Our model follows a rigorous 4-step process to deliver accurate cardiovascular disease risk assessments
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 border-primary/20 bg-card h-full hover:border-primary/50 transition-all duration-300">
                <div className="space-y-4">
                  {/* Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="border-accent/20 bg-accent/5">
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="bg-accent/20 p-3 rounded-lg shrink-0">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Scikit-learn Based Implementation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our machine learning pipeline is implemented using well-established algorithms from the scikit-learn library. 
                  The project emphasizes correct data preprocessing, feature engineering, model training, evaluation, and deployment. 
                  NumPy and Pandas are used for numerical computation and data handling, while scikit-learn provides reliable and 
                  industry-standard machine learning models for accurate prediction.

                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
