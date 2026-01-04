"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Activity,
  Loader2,
  Sparkles,
  ArrowLeft,
  Heart,
} from "lucide-react"
import Link from "next/link"

const samplePatients = [
  {
    name: "High Risk Patient",
    age: 58,
    gender: "1",
    height: 165,
    weight: 92,
    systolic: 160,
    diastolic: 100,
    cholesterol: "3",
    glucose: "3",
    smoking: "1",
    alcohol: "1",
    active: "0",
  },
  {
    name: "Low Risk Patient",
    age: 35,
    gender: "2",
    height: 168,
    weight: 65,
    systolic: 110,
    diastolic: 70,
    cholesterol: "1",
    glucose: "1",
    smoking: "0",
    alcohol: "0",
    active: "1",
  },
  {
    name: "Moderate Risk Patient",
    age: 48,
    gender: "1",
    height: 175,
    weight: 78,
    systolic: 135,
    diastolic: 88,
    cholesterol: "2",
    glucose: "2",
    smoking: "0",
    alcohol: "1",
    active: "1",
  },
]

export default function PredictionForm() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [streamBlocks, setStreamBlocks] = useState<string[]>([])

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    systolic: "",
    diastolic: "",
    cholesterol: "",
    glucose: "",
    smoking: "",
    alcohol: "",
    active: "",
  })

  const loadSampleData = (index: number) => {
    const s = samplePatients[index]
    setFormData({
      age: s.age.toString(),
      gender: s.gender,
      height: s.height.toString(),
      weight: s.weight.toString(),
      systolic: s.systolic.toString(),
      diastolic: s.diastolic.toString(),
      cholesterol: s.cholesterol,
      glucose: s.glucose,
      smoking: s.smoking,
      alcohol: s.alcohol,
      active: s.active,
    })
    setResult(null)
  }

  type SelectField = {
  id: keyof typeof formData
  options: string[]
  startIndex?: number
  }

  const selectFields: SelectField[] = [
  { id: "gender", options: ["Male", "Female"], startIndex: 1 },
  { id: "cholesterol", options: ["Normal", "Above", "High"], startIndex: 1 },
  { id: "glucose", options: ["Normal", "Above", "High"], startIndex: 1 },
  { id: "smoking", options: ["No", "Yes"], startIndex: 0 },
  { id: "alcohol", options: ["No", "Yes"], startIndex: 0 },
  { id: "active", options: ["No", "Yes"], startIndex: 0 },
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  type PredictionResult = {
  risk: "High Risk" | "Moderate Risk" | "Low Risk"
  probability: number
  summary: string
  recommendations: string[]
  }

  const generateInsight = (risk: string, prob: number) => {
    if (risk === "High Risk") {
      return {
        summary:
          "The model indicates a high probability of cardiovascular disease. Immediate lifestyle changes and medical consultation are strongly recommended.",
        recommendations: [
          "Consult a cardiologist immediately",
          "Reduce salt and cholesterol intake",
          "Quit smoking and alcohol",
          "Monitor blood pressure daily",
        ],
      }
    }

    if (risk === "Moderate Risk") {
      return {
        summary:
          "You show moderate cardiovascular risk. Preventive care and lifestyle optimization can significantly reduce future complications.",
        recommendations: [
          "Regular exercise (30 mins/day)",
          "Balanced diet",
          "Routine health checkups",
        ],
      }
    }

    return {
      summary:
        "Your cardiovascular risk is currently low. Maintain healthy habits to keep your heart strong.",
      recommendations: [
        "Continue physical activity",
        "Maintain healthy weight",
        "Annual health screening",
      ],
    }
  }

  const streamAllContent = async (
    risk: string,
    probability: number,
    summary: string,
    recommendations: string[]
  ) => {
    setStreamBlocks([])

    const blocks = [
      `Risk Level: ${risk}`,
      `Risk Probability: ${(probability * 100).toFixed(1)}%`,
      summary,
      "Recommended Actions:",
      ...recommendations.map((r) => `• ${r}`),
    ]

    for (let block of blocks) {
      let temp = ""
      for (let i = 0; i <= block.length; i++) {
        await new Promise((r) => setTimeout(r, 20))
        temp = block.slice(0, i)

        setStreamBlocks((prev) => {
          const copy = [...prev]
          copy[copy.length - 1] = temp
          return copy
        })
      }

      setStreamBlocks((prev) => [...prev, ""])
    }
  }



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch("https://ml-cardiodisease-prediction-1.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          age: Number(formData.age),
          gender: Number(formData.gender),
          height: Number(formData.height),
          weight: Number(formData.weight),
          ap_hi: Number(formData.systolic),
          ap_lo: Number(formData.diastolic),
          cholesterol: Number(formData.cholesterol),
          gluc: Number(formData.glucose),
          smoke: Number(formData.smoking),
          alco: Number(formData.alcohol),
          active: Number(formData.active),
        }),
      })

      if (!response.ok) throw new Error("Prediction failed")

      const data = await response.json()

      const probability = data.probability ?? 0

      const risk =
        probability > 0.6
          ? "High Risk"
          : probability > 0.4
          ? "Moderate Risk"
          : "Low Risk"

      const insight = generateInsight(risk, probability)

      setResult({
        risk,
        probability,
        summary: insight.summary,
        recommendations: insight.recommendations,
      })

      streamAllContent(
        risk,
        probability,
        insight.summary,
        insight.recommendations
      )

    } catch (error) {
      alert("Failed to connect to prediction server")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Header */}
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

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold">
              Cardiovascular Risk Prediction
            </h2>
            <p className="text-muted-foreground">
              AI-powered cardiovascular disease assessment
            </p>
          </div>

          {/* Sample Buttons */}
          <div className="flex justify-center gap-3 flex-wrap">
            {samplePatients.map((s, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                onClick={() => loadSampleData(i)}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {s.name}
              </Button>
            ))}
          </div>

          {/* Form */}
          <Card>
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  ["age", "Age"],
                  ["height", "Height (cm)"],
                  ["weight", "Weight (kg)"],
                  ["systolic", "Systolic BP"],
                  ["diastolic", "Diastolic BP"],
                ].map(([id, label]) => (
                  <div key={id} className="space-y-2">
                    <Label htmlFor={id}>{label}</Label>
                    <Input
                      id={id}
                      type="number"
                      value={(formData as any)[id]}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                ))}

                {selectFields.map(({ id, options, startIndex = 0 }) => (
                    <div key={id} className="space-y-2">
                        <Label htmlFor={id}>{id}</Label>

                        <select
                        id={id}
                        value={formData[id]}
                        onChange={handleInputChange}
                        required
                        className="w-full h-10 rounded-md border px-3"

                        >
                        <option value="">Select...</option>

                        {options.map((opt, i) => (
                            <option
                              key={i}
                              value={i + startIndex}
                              className="bg-white text-black dark:bg-background dark:text-foreground"
                            >
                              {opt}
                            </option>

                        ))}
                        </select>
                    </div>
                    ))}

              </div>

              <Button type="submit" className="w-full text-lg" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Activity className="mr-2 h-5 w-5" />
                    Get Prediction
                  </>
                )}
              </Button>

              {/* Output */}
              {result && (
                <Card className={ result.risk === "High Risk" ? "border-destructive bg-destructive/10 p-6" : result.risk === "Moderate Risk" ? "border-accent bg-accent/10 p-6" : "border-green-500 bg-green-500/10 p-6" }>
                  <div className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">{result.risk}</h3>
                  </div>

                  {/* Streaming paragraph */}
                  {streamBlocks.map((block, i) => (
                    <p
                      key={i}
                      className={`text-lg ${
                        block.startsWith("Risk Level")
                          ? "font-bold text-xl"
                          : block.startsWith("Recommended")
                          ? "font-semibold mt-3"
                          : ""
                      }`}
                    >
                      {block}
                    </p>
                    ))}
                </Card>
              )}

            </form>
          </Card>
        </div>
      </section>
    </>
  )
}
