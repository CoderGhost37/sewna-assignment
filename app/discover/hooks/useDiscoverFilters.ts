import { useState, useMemo } from "react"

export interface Designer {
  id: number
  name: string
  specialty: string
  location: string
  rating: number
  reviews: number
  responseTime: string
  image: string
  bio: string
  styles: string[]
  featured: boolean
}

export const useDiscoverFilters = (designers: Designer[]) => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState<"all" | "featured">("all")
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  const filteredDesigners = useMemo(() => {
    return designers.filter((designer) => {
      const matchesSearch =
        designer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        designer.specialty.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesStyles = selectedStyles.length === 0 ||
        selectedStyles.some((style) => designer.styles.includes(style))

      const matchesFilter = filterType === "all" ||
        (filterType === "featured" && designer.featured)

      return matchesSearch && matchesStyles && matchesFilter
    })
  }, [designers, searchQuery, selectedStyles, filterType])

  const allStyles = useMemo(() => {
    return Array.from(new Set(designers.flatMap((d) => d.styles)))
  }, [designers])

  return {
    selectedStyles,
    setSelectedStyles,
    searchQuery,
    setSearchQuery,
    filterType,
    setFilterType,
    favorites,
    toggleFavorite,
    filteredDesigners,
    allStyles
  }
}
