import { Card } from "@/components/ui/card"
import { Brain, Database, Target, Zap } from "lucide-react"

export default function ModelInfoSection() {
  const features = [
    {
      icon: Brain,
      title: "Sklearn-Based ML Model",
      description:
        "Built using proven machine learning algorithms from scikit-learn, focusing on proper feature engineering, preprocessing, and evaluation",
    },
    {
      icon: Database,
      title: "Kaggle Cardiovascular Dataset",
      description:
        "Trained on 70,000 patient records from the Cardiovascular Disease Dataset, ensuring reliable learning and real-world relevance",
    },
    {
      icon: Target,
      title: "Reliable Performance",
      description:
        "Achieves strong predictive performance with high accuracy and ROC-AUC score, validated through systematic testing",
    },
    {
      icon: Zap,
      title: "Real-time Inference",
      description:
        "Fast cardiovascular risk prediction using optimized sklearn pipelines integrated with a real-time backend API",
    },
  ]


  return (
    <section id="model-info" className="py-20 container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            Model Information
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Powered by Advanced Machine Learning</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Our prediction model leverages well-established machine learning algorithms from scikit-learn as part of an academic ML/DL project, focusing on data preprocessing, model selection, and performance evaluation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 border-primary/20 bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technical Details */}
        <Card className="border-primary/20 bg-card/50">
          <div className="p-6 md:p-8 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Algorithm</span>
                  <span className="font-semibold text-foreground">CatBoostClassifier</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Training Data</span>
                  <span className="font-semibold text-foreground">70,000 samples</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Features</span>
                  <span className="font-semibold text-foreground">11 input variables</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Accuracy</span>
                  <span className="font-semibold text-primary">73.97%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">ROC-AUC Score</span>
                  <span className="font-semibold text-accent">0.805</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Libraries Used</span>
                  <span className="font-semibold text-foreground">NumPy, Pandas, Scikit-learn</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
