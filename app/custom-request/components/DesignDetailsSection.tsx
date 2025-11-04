import { AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface DesignDetailsSectionProps {
  formData: {
    title: string
    description: string
  }
  errors: {
    [key: string]: string
  }
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const DesignDetailsSection = ({
  formData,
  errors,
  onInputChange
}: DesignDetailsSectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-lg font-medium">
          Design Title <span className="text-destructive">*</span>
        </Label>
        <Input
          id="title"
          placeholder="e.g., Contemporary Wedding Lehenga"
          value={formData.title}
          onChange={onInputChange}
          className={`text-base ${errors.title ? "border-destructive focus-visible:ring-destructive" : ""}`}
        />
        {errors.title && (
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span>{errors.title}</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-lg font-medium">
          Describe Your Vision <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="description"
          placeholder="Tell designers about your dream outfit, occasion, preferred colors, fabrics, or any specific details..."
          value={formData.description}
          onChange={onInputChange}
          className={`min-h-[150px] text-base resize-none ${errors.description ? "border-destructive focus-visible:ring-destructive" : ""}`}
        />
        <div className="flex items-center justify-between">
          {errors.description ? (
            <div className="flex items-center gap-2 text-sm text-destructive">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.description}</span>
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">
              {formData.description.length}/1000 characters
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
