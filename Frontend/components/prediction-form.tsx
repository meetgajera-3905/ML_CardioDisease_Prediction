// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import { Activity, Loader2, CheckCircle, XCircle, Sparkles } from "lucide-react"

// const samplePatients = [
//   {
//     name: "High Risk Patient",
//     age: 58,
//     gender: "1",
//     height: 165,
//     weight: 92,
//     systolic: 160,
//     diastolic: 100,
//     cholesterol: "3",
//     glucose: "3",
//     smoking: "1",
//     alcohol: "1",
//     active: "0",
//     expectedRisk: "High Risk",
//     expectedProb: 0.87,
//   },
//   {
//     name: "Low Risk Patient",
//     age: 35,
//     gender: "2",
//     height: 168,
//     weight: 65,
//     systolic: 110,
//     diastolic: 70,
//     cholesterol: "1",
//     glucose: "1",
//     smoking: "0",
//     alcohol: "0",
//     active: "1",
//     expectedRisk: "Low Risk",
//     expectedProb: 0.15,
//   },
//   {
//     name: "Moderate Risk Patient",
//     age: 48,
//     gender: "1",
//     height: 175,
//     weight: 78,
//     systolic: 135,
//     diastolic: 88,
//     cholesterol: "2",
//     glucose: "2",
//     smoking: "0",
//     alcohol: "1",
//     active: "1",
//     expectedRisk: "Moderate Risk",
//     expectedProb: 0.52,
//   },
// ]

// export default function PredictionForm() {
//   const [loading, setLoading] = useState(false)
//   const [result, setResult] = useState<{ risk: string; probability: number } | null>(null)
//   const [formData, setFormData] = useState({
//     age: "",
//     gender: "",
//     height: "",
//     weight: "",
//     systolic: "",
//     diastolic: "",
//     cholesterol: "",
//     glucose: "",
//     smoking: "",
//     alcohol: "",
//     active: "",
//   })

//   const loadSampleData = (sampleIndex: number) => {
//     const sample = samplePatients[sampleIndex]
//     setFormData({
//       age: sample.age.toString(),
//       gender: sample.gender,
//       height: sample.height.toString(),
//       weight: sample.weight.toString(),
//       systolic: sample.systolic.toString(),
//       diastolic: sample.diastolic.toString(),
//       cholesterol: sample.cholesterol,
//       glucose: sample.glucose,
//       smoking: sample.smoking,
//       alcohol: sample.alcohol,
//       active: sample.active,
//     })
//     setResult(null)
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setLoading(true)

//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     // Calculate a more realistic prediction based on form inputs
//     const age = Number.parseInt(formData.age)
//     const systolic = Number.parseInt(formData.systolic)
//     const diastolic = Number.parseInt(formData.diastolic)
//     const cholesterol = Number.parseInt(formData.cholesterol)
//     const glucose = Number.parseInt(formData.glucose)
//     const smoking = Number.parseInt(formData.smoking)

//     // Simple risk calculation (mimics ML model logic)
//     let riskScore = 0
//     if (age > 50) riskScore += 0.2
//     if (systolic > 140) riskScore += 0.25
//     if (diastolic > 90) riskScore += 0.2
//     if (cholesterol > 1) riskScore += 0.15
//     if (glucose > 1) riskScore += 0.1
//     if (smoking === 1) riskScore += 0.1

//     const probability = Math.min(0.95, Math.max(0.05, riskScore + Math.random() * 0.1))

//     setResult({
//       risk: probability > 0.6 ? "High Risk" : probability > 0.4 ? "Moderate Risk" : "Low Risk",
//       probability: probability,
//     })
//     setLoading(false)
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     })
//   }

//   return (
//     <section id="prediction-form" className="py-20 container mx-auto px-4">
//       <div className="max-w-5xl mx-auto space-y-8">
//         {/* Section Header */}
//         <div className="text-center space-y-4">
//           <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
//             Risk Assessment
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-balance">Get Your Cardiovascular Risk Assessment</h2>
//           <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
//             Enter patient health metrics to receive an AI-powered cardiovascular disease risk prediction
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-3">
//           {samplePatients.map((sample, index) => (
//             <Button
//               key={index}
//               type="button"
//               variant="outline"
//               size="sm"
//               onClick={() => loadSampleData(index)}
//               className="border-primary/30 hover:border-primary/50 hover:bg-primary/5"
//             >
//               <Sparkles className="mr-2 h-4 w-4" />
//               Try {sample.name}
//             </Button>
//           ))}
//         </div>

//         <Card className="border-primary/20 bg-card/50 backdrop-blur">
//           <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
//             {/* Form Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="age" className="text-foreground">
//                   Age (years)
//                 </Label>
//                 <Input
//                   id="age"
//                   type="number"
//                   placeholder="e.g., 45"
//                   value={formData.age}
//                   onChange={handleInputChange}
//                   required
//                   className="bg-background border-border"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="gender" className="text-foreground">
//                   Gender
//                 </Label>
//                 <select
//                   id="gender"
//                   value={formData.gender}
//                   onChange={handleInputChange}
//                   required
//                   className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
//                 >
//                   <option value="">Select...</option>
//                   <option value="1">Male</option>
//                   <option value="2">Female</option>
//                 </select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="height" className="text-foreground">
//                   Height (cm)
//                 </Label>
//                 <Input
//                   id="height"
//                   type="number"
//                   placeholder="e.g., 170"
//                   value={formData.height}
//                   onChange={handleInputChange}
//                   required
//                   className="bg-background border-border"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="weight" className="text-foreground">
//                   Weight (kg)
//                 </Label>
//                 <Input
//                   id="weight"
//                   type="number"
//                   placeholder="e.g., 75"
//                   value={formData.weight}
//                   onChange={handleInputChange}
//                   required
//                   className="bg-background border-border"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="systolic" className="text-foreground">
//                   Systolic BP (mmHg)
//                 </Label>
//                 <Input
//                   id="systolic"
//                   type="number"
//                   placeholder="e.g., 120"
//                   value={formData.systolic}
//                   onChange={handleInputChange}
//                   required
//                   className="bg-background border-border"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="diastolic" className="text-foreground">
//                   Diastolic BP (mmHg)
//                 </Label>
//                 <Input
//                   id="diastolic"
//                   type="number"
//                   placeholder="e.g., 80"
//                   value={formData.diastolic}
//                   onChange={handleInputChange}
//                   required
//                   className="bg-background border-border"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="cholesterol" className="text-foreground">
//                   Cholesterol
//                 </Label>
//                 <select
//                   id="cholesterol"
//                   value={formData.cholesterol}
//                   onChange={handleInputChange}
//                   required
//                   className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
//                 >
//                   <option value="">Select...</option>
//                   <option value="1">Normal</option>
//                   <option value="2">Above Normal</option>
//                   <option value="3">Well Above Normal</option>
//                 </select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="glucose" className="text-foreground">
//                   Glucose
//                 </Label>
//                 <select
//                   id="glucose"
//                   value={formData.glucose}
//                   onChange={handleInputChange}
//                   required
//                   className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
//                 >
//                   <option value="">Select...</option>
//                   <option value="1">Normal</option>
//                   <option value="2">Above Normal</option>
//                   <option value="3">Well Above Normal</option>
//                 </select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="smoking" className="text-foreground">
//                   Smoking
//                 </Label>
//                 <select
//                   id="smoking"
//                   value={formData.smoking}
//                   onChange={handleInputChange}
//                   required
//                   className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
//                 >
//                   <option value="">Select...</option>
//                   <option value="0">No</option>
//                   <option value="1">Yes</option>
//                 </select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="alcohol" className="text-foreground">
//                   Alcohol Intake
//                 </Label>
//                 <select
//                   id="alcohol"
//                   value={formData.alcohol}
//                   onChange={handleInputChange}
//                   required
//                   className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
//                 >
//                   <option value="">Select...</option>
//                   <option value="0">No</option>
//                   <option value="1">Yes</option>
//                 </select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="active" className="text-foreground">
//                   Physical Activity
//                 </Label>
//                 <select
//                   id="active"
//                   value={formData.active}
//                   onChange={handleInputChange}
//                   required
//                   className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
//                 >
//                   <option value="">Select...</option>
//                   <option value="0">No</option>
//                   <option value="1">Yes</option>
//                 </select>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <Button type="submit" size="lg" className="w-full text-lg" disabled={loading}>
//               {loading ? (
//                 <>
//                   <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//                   Analyzing...
//                 </>
//               ) : (
//                 <>
//                   <Activity className="mr-2 h-5 w-5" />
//                   Get Prediction
//                 </>
//               )}
//             </Button>

//             {/* Results */}
//             {result && (
//               <Alert
//                 className={
//                   result.risk === "High Risk"
//                     ? "border-destructive bg-destructive/10"
//                     : result.risk === "Moderate Risk"
//                       ? "border-accent bg-accent/10"
//                       : "border-chart-3 bg-chart-3/10"
//                 }
//               >
//                 <div className="flex items-start gap-4">
//                   {result.risk === "High Risk" ? (
//                     <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
//                   ) : result.risk === "Moderate Risk" ? (
//                     <Activity className="h-6 w-6 text-accent shrink-0 mt-1" />
//                   ) : (
//                     <CheckCircle className="h-6 w-6 text-chart-3 shrink-0 mt-1" />
//                   )}
//                   <div className="space-y-2 flex-1">
//                     <AlertDescription className="text-foreground">
//                       <strong className="text-lg">Prediction Result: {result.risk}</strong>
//                     </AlertDescription>
//                     <AlertDescription className="text-muted-foreground">
//                       Risk Probability: {(result.probability * 100).toFixed(1)}%
//                     </AlertDescription>
//                     <AlertDescription className="text-sm text-muted-foreground">
//                       {result.risk === "High Risk"
//                         ? "This prediction indicates elevated cardiovascular disease risk. Please consult with a healthcare professional for proper evaluation."
//                         : result.risk === "Moderate Risk"
//                           ? "This prediction indicates moderate cardiovascular disease risk. Consider lifestyle improvements and regular medical check-ups."
//                           : "This prediction indicates lower cardiovascular disease risk. Continue maintaining a healthy lifestyle and regular check-ups."}
//                     </AlertDescription>
//                   </div>
//                 </div>
//               </Alert>
//             )}
//           </form>
//         </Card>
//       </div>
//     </section>
//   )
// }
