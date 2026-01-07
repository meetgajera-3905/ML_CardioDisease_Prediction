"use client"

import { Button } from "@/components/ui/button"
import { Heart, Activity } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full" />
              <div className="relative bg-card border border-primary/50 rounded-full p-6 pulse-glow">
                <Heart className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              CardioPredict AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Advanced cardiovascular disease risk assessment powered by machine learning
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Our AI model analyzes multiple health factors to provide accurate cardiovascular disease risk predictions,
            helping healthcare professionals make informed decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 group"
              onClick={() => router.push("/predict")}
            >
              Get Prediction
              <Activity className="ml-2 h-5 w-5 group-hover:animate-pulse" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent"
              onClick={() => router.push("/model-details")}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">73.97%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">70K</div>
              <div className="text-sm text-muted-foreground">Data Points</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-chart-3">0.805</div>
              <div className="text-sm text-muted-foreground">ROC-AUC</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
