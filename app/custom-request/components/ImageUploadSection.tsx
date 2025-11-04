import { Upload, X } from "lucide-react"
import { Label } from "@/components/ui/label"

interface ImageUploadSectionProps {
  selectedImages: string[]
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  onRemoveImage: (index: number) => void
}

export const ImageUploadSection = ({
  selectedImages,
  onImageUpload,
  onRemoveImage
}: ImageUploadSectionProps) => {
  return (
    <div className="space-y-4 animate-fade-in-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
      <div>
        <Label className="text-lg font-medium">Inspiration Images</Label>
        <p className="text-sm text-muted-foreground mt-1">
          Upload up to 5 images that inspire your design (optional)
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {selectedImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden group"
          >
            <img
              src={image}
              alt={`Inspiration ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => onRemoveImage(index)}
              className="absolute top-2 right-2 p-1 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}

        {selectedImages.length < 5 && (
          <label className="aspect-square border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
            <Upload className="h-8 w-8 text-muted-foreground mb-2" />
            <span className="text-xs text-muted-foreground text-center px-2">
              Upload Image
            </span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={onImageUpload}
              className="hidden"
            />
          </label>
        )}
      </div>
    </div>
  )
}
