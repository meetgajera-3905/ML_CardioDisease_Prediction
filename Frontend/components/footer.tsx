import { Heart, Github, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">CardioPredict AI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An academic machine learning project for cardiovascular disease prediction using scikit-learn models and a complete end-to-end ML pipeline.
            </p>
          </div>

          {/* Project Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Project Details</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Phase 5: Backend & Deployment</li>
              <li>Dataset: Kaggle CVD Dataset</li>
              <li>Framework: Next.js + FastAPI</li>
              <li>Libraries: NumPy, Pandas, Matplotlib, Scikit-learn</li>
            </ul>
          </div>

          {/* Contact */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 CardioPredict AI. Academic Project - For Educational Purposes Only.</p>
        </div>
      </div>
    </footer>
  )
}
