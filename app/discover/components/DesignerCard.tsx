import { Star, MapPin, Clock, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Designer } from "../hooks/useDiscoverFilters"

interface DesignerCardProps {
  designer: Designer
  index: number
  isFavorite: boolean
  onToggleFavorite: (id: number, e: React.MouseEvent) => void
}

export const DesignerCard = ({
  designer,
  index,
  isFavorite,
  onToggleFavorite
}: DesignerCardProps) => {
  return (
    <div
      className="group cursor-pointer animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
      style={{ animationDelay: `${600 + index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
        <img
          src={designer.image}
          alt={designer.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <button
          onClick={(e) => onToggleFavorite(designer.id, e)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors z-10"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-primary text-primary" : "text-gray-600"
            }`}
          />
        </button>

        {designer.featured && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground z-10 font-semibold">
            Featured
          </Badge>
        )}

        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="secondary" className="w-full">
            View Portfolio
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold">{designer.name}</h3>
            <p className="text-sm text-primary font-medium">{designer.specialty}</p>
          </div>
          <div className="flex items-center gap-1 bg-secondary rounded-full px-2 py-1">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="text-sm font-medium">{designer.rating}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {designer.bio}
        </p>

        <div className="space-y-1 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {designer.location}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Responds in {designer.responseTime}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {designer.styles.slice(0, 2).map((style) => (
            <Badge key={style} variant="outline" className="text-xs">
              {style}
            </Badge>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">{designer.reviews} reviews</p>
      </div>
    </div>
  )
}
