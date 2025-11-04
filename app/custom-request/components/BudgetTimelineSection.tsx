import { AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BudgetTimelineSectionProps {
  formData: {
    budget: string
    timeline: string
  }
  errors: {
    [key: string]: string
  }
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const BudgetTimelineSection = ({
  formData,
  errors,
  onInputChange
}: BudgetTimelineSectionProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
      <div className="space-y-2">
        <Label htmlFor="budget" className="text-lg font-medium">
          Budget Range <span className="text-destructive">*</span>
        </Label>
        <Input
          id="budget"
          placeholder="e.g., $500 - $1000"
          value={formData.budget}
          onChange={onInputChange}
          className={`text-base ${errors.budget ? "border-destructive focus-visible:ring-destructive" : ""}`}
        />
        {errors.budget && (
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span>{errors.budget}</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline" className="text-lg font-medium">
          Timeline <span className="text-destructive">*</span>
        </Label>
        <Input
          id="timeline"
          placeholder="e.g., 4-6 weeks"
          value={formData.timeline}
          onChange={onInputChange}
          className={`text-base ${errors.timeline ? "border-destructive focus-visible:ring-destructive" : ""}`}
        />
        {errors.timeline && (
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span>{errors.timeline}</span>
          </div>
        )}
      </div>
    </div>
  )
}
