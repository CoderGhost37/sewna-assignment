import { Designer } from "../hooks/useDiscoverFilters"
import { DesignerCard } from "./DesignerCard"

interface DesignerGridProps {
  designers: Designer[]
  favorites: number[]
  onToggleFavorite: (id: number, e: React.MouseEvent) => void
}

export const DesignerGrid = ({
  designers,
  favorites,
  onToggleFavorite
}: DesignerGridProps) => {
  if (designers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No designers found matching your filters.
        </p>
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {designers.map((designer, index) => (
        <DesignerCard
          key={designer.id}
          designer={designer}
          index={index}
          isFavorite={favorites.includes(designer.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}
