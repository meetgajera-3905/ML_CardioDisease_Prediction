import { Card } from "@/components/ui/card"
import { AlertTriangle, ShieldAlert } from "lucide-react"

export default function DisclaimerSection() {
  return (
    <section className="py-12 container mx-auto px-4">
      <Card className="max-w-4xl mx-auto border-destructive/50 bg-destructive/5">
        <div className="p-6 md:p-8 space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-destructive/20 p-3 rounded-lg shrink-0">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
            <div className="space-y-3 flex-1">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">Medical Disclaimer</h2>
              <div className="space-y-2 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Important:</strong> This AI model is designed for educational and
                  research purposes only. It should NOT be used as a substitute for professional medical advice,
                  diagnosis, or treatment.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Always seek the advice of qualified healthcare providers</li>
                  <li>Never disregard professional medical advice based on this prediction</li>
                  <li>This tool is part of an ML/DL academic project</li>
                  <li>Results should be validated by medical professionals</li>
                </ul>
                <p className="pt-2 flex items-center gap-2 text-sm">
                  <ShieldAlert className="h-4 w-4 text-destructive" />
                  <span>By using this tool, you acknowledge that you understand and accept these limitations.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}
