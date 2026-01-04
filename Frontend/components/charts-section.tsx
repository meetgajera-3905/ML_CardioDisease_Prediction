"use client"

import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

export default function ChartsSection() {
  const [rocData, setRocData] = useState<any[]>([]);
  const [auc, setAuc] = useState<number>(0);

  useEffect(() => {
    fetch("http://localhost:8000/roc")
      .then((res) => res.json())
      .then((data) => {
        // setRocData(data.roc_curve);
        setRocData(data.roc_curve.sort((a:any, b:any) => a.fpr - b.fpr))
        setAuc(data.roc_auc);  
      })
      .catch((err) => console.error("Failed to fetch ROC:", err));
  }, []);



  // Sample data for accuracy comparison
  const accuracyData = [
    { model: "CatBoost", accuracy: 73.97, color: "hsl(var(--chart-1))" },
    { model: "Logistic Reg", accuracy: 73.11, color: "hsl(var(--chart-2))" },
    { model: "Decision Tree", accuracy: 73.48, color: "hsl(var(--chart-3))" },
    { model: "Random Forest", accuracy: 73.57, color: "hsl(var(--chart-4))" },
    { model: "SVM", accuracy: 73.56, color: "hsl(var(--accent))" }
  ]

  const COLORS = ["hsl(var(--chart-3))", "hsl(var(--destructive))", "hsl(var(--destructive))", "hsl(var(--chart-1))"]

  // Feature importance
  const featureImportance = [
    { feature: "Systolic BP (ap_hi)", importance: 22.70 },
    { feature: "Diastolic BP (ap_lo)", importance: 19.70 },
    { feature: "Age", importance: 18.80 },
    { feature: "Cholesterol", importance: 14.70 },
    { feature: "Glucose", importance: 12.60 },
    { feature: "Weight", importance: 9.50 },
    { feature: "Active Lifestyle", importance: 0.85 },
    { feature: "Smoking", importance: 0.60 },
    { feature: "Alcohol Intake", importance: 0.50 },
    { feature: "Gender", importance: 0.40 },
    { feature: "Height", importance: 0.35 }
  ]

  return (
    <section className="py-20 container mx-auto px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-block bg-chart-1/10 text-chart-1 px-4 py-2 rounded-full text-sm font-semibold">
            Performance Metrics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Model Analytics & Insights</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Comprehensive visualization of model performance, training metrics, and feature importance
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Model Accuracy Comparison */}
          <Card className="border-primary/20 bg-card p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Model Accuracy Comparison</h3>
                <p className="text-sm text-muted-foreground">Performance across different algorithms</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={accuracyData}>
                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="model"
                    angle={-30}
                    textAnchor="end"
                    height={80}
                    interval={0}
                  />
                  <YAxis domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ fontWeight: 600 }}
                    formatter={(value: number) => `${value}%`}
                    itemStyle={{
                      color: "inherit",
                    }}
                  />
                  <Bar
                    dataKey="accuracy"
                    fill="url(#blueGradient)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>


            </div>
          </Card>

          {/* ROC Curve */}
          <Card className="border-primary/20 bg-card p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">ROC Curve</h3>
                <p className="text-sm text-muted-foreground">
                  Model discrimination ability (AUC = {auc.toFixed(3)})
                </p>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={rocData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />

                  <XAxis
                    dataKey="fpr"
                    type="number"
                    domain={[0, 1]}
                    tick={{ fill: "#4b5563", fontSize: 12 }}
                    axisLine={{ stroke: "#4b5563" }}
                    tickLine={{ stroke: "#4b5563" }}
                    label={{ value: "False Positive Rate", position: "insideBottom", offset: -5 }}
                  />

                  <YAxis
                    type="number"
                    domain={[0, 1]}
                    tick={{ fill: "#4b5563", fontSize: 12 }}
                    axisLine={{ stroke: "#4b5563" }}
                    tickLine={{ stroke: "#4b5563" }}
                    label={{ value: "True Positive Rate", angle: -90, position: "insideLeft" }}
                  />

                  {/* <Tooltip
                    content={({ payload }) => {
                      if (!payload || !payload.length) return null

                      const { fpr, tpr } = payload[0].payload

                      return (
                        <div className="rounded-lg border border-border bg-card p-2 text-sm">
                          <p>FPR: {fpr.toFixed(3)}</p>
                          <p>TPR: {tpr.toFixed(3)}</p>
                        </div>
                      )
                    }}
                  /> */}


                  {/* Diagonal random classifier line */}
                  <Line
                    type="linear"
                    data={[{ fpr: 0, tpr: 0 }, { fpr: 1, tpr: 1 }]}
                    dataKey="tpr"
                    stroke="#d1d5db"
                    strokeDasharray="5 5"
                    dot={false}
                    legendType="none"
                  />

                  {/* Model ROC curve */}
                  <Line
                    type="linear"
                    dataKey="tpr"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={false}
                  />

                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>


          {/* Confusion Matrix Heatmap */}
          <Card className="border-primary/20 bg-card p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Confusion Matrix</h3>
                <p className="text-sm text-muted-foreground">Classification accuracy breakdown</p>
              </div>
              <div className="grid grid-cols-2 gap-2 p-4">
                {/* True Negative */}
                <div className="aspect-square bg-chart-3/20 border-2 border-chart-3 rounded-lg flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-chart-3">5454</div>
                  <div className="text-xs text-muted-foreground text-center mt-2">True Negative</div>
                  <div className="text-xs text-muted-foreground">(Correct: No Disease)</div>
                </div>
                {/* False Positive */}
                <div className="aspect-square bg-destructive/20 border-2 border-destructive rounded-lg flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-destructive">1550</div>
                  <div className="text-xs text-muted-foreground text-center mt-2">False Positive</div>
                  <div className="text-xs text-muted-foreground">(Error: Predicted Disease)</div>
                </div>
                {/* False Negative */}
                <div className="aspect-square bg-destructive/20 border-2 border-destructive rounded-lg flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-destructive">2093</div>
                  <div className="text-xs text-muted-foreground text-center mt-2">False Negative</div>
                  <div className="text-xs text-muted-foreground">(Error: Missed Disease)</div>
                </div>
                {/* True Positive */}
                <div className="aspect-square bg-chart-1/20 border-2 border-chart-1 rounded-lg flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-chart-1">4903</div>
                  <div className="text-xs text-muted-foreground text-center mt-2">True Positive</div>
                  <div className="text-xs text-muted-foreground">(Correct: Disease)</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
                Total Predictions: 14,000 | Accuracy: 73.97%
              </div>
            </div>
          </Card>

          {/* Feature Importance */}
              <Card className="border-primary/20 bg-card p-6 h-full">
          <div className="space-y-4 h-full flex flex-col">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                Feature Importance
              </h3>
              <p className="text-sm text-muted-foreground">
                Impact of each feature on predictions
              </p>
            </div>

            {/* Chart Wrapper */}
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={featureImportance}
                  layout="vertical"
                  margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                >
                  {/* Gradient */}
                  <defs>
                    <linearGradient id="blueGradientHorizontal" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />

                  <XAxis
                    type="number"
                    domain={[0, 'dataMax + 2']}
                    tick={{ fill: "#4b5563", fontSize: 12 }}
                    axisLine={{ stroke: "#4b5563" }}
                    tickLine={{ stroke: "#4b5563" }}
                    tickFormatter={(value) => `${value}%`}
                  />

                  <YAxis
                    type="category"
                    dataKey="feature"
                    width={150}   // 🔥 important
                    tick={{ fill: "#4b5563", fontSize: 12 }}
                    axisLine={{ stroke: "#4b5563" }}
                    tickLine={{ stroke: "#4b5563" }}
                  />

                  <Tooltip
                    formatter={(value: number) => `${value.toFixed(2)}%`}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ fontWeight: 600 }}
                  />

                  <Bar
                    dataKey="importance"
                    fill="url(#blueGradientHorizontal)"
                    radius={[0, 8, 8, 0]}
                    barSize={18}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>


        </div>

        {/* Performance Metrics Summary */}
        <Card className="border-primary/20 bg-card">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Key Performance Indicators</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-chart-1">73.97%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-chart-2">75.98%</div>
                <div className="text-sm text-muted-foreground">Precision</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-chart-3">70.08%</div>
                <div className="text-sm text-muted-foreground">Recall</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-accent">0.73</div>
                <div className="text-sm text-muted-foreground">F1-Score</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
