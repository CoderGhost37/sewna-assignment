import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

interface StylePreferencesSectionProps {
  selectedStyles: string[]
  onToggleStyle: (style: string) => void
}

const STYLE_OPTIONS = [
  "Traditional",
  "Contemporary",
  "Fusion",
  "Minimalist",
  "Bohemian",
  "Formal",
  "Casual",
  "Evening Wear",
  "Streetwear",
  "Sustainable",
]

export const StylePreferencesSection = ({
  selectedStyles,
  onToggleStyle
}: StylePreferencesSectionProps) => {
  return (
    <div className="space-y-4 animate-fade-in-up [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards]">
      <div>
        <Label className="text-lg font-medium">Style Preferences</Label>
        <p className="text-sm text-muted-foreground mt-1">
          Select styles that match your vision (optional)
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {STYLE_OPTIONS.map((style) => (
          <Badge
            key={style}
            variant={selectedStyles.includes(style) ? "default" : "outline"}
            className={`cursor-pointer transition-all ${
              selectedStyles.includes(style)
                ? "bg-primary text-primary-foreground"
                : "hover:border-primary"
            }`}
            onClick={() => onToggleStyle(style)}
          >
            {style}
          </Badge>
        ))}
      </div>
    </div>
  )
}
