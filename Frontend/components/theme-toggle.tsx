"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const preferredTheme = savedTheme || "dark"
    setTheme(preferredTheme)
    document.documentElement.classList.toggle("light", preferredTheme === "light")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("light", newTheme === "light")
  }

  return (
    <Button
      onClick={toggleTheme}
      size="icon"
      variant="outline"
      className="fixed top-20 right-6 z-50 rounded-full bg-card/80 backdrop-blur border-primary/20 hover:bg-card hover:border-primary/40 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-transform duration-300 rotate-0 scale-100" />
      )}
    </Button>
  )
}
