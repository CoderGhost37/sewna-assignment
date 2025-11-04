"use client"

import { Navbar } from "@/components/Navbar"
import { useDiscoverFilters } from "./hooks/useDiscoverFilters"
import { designers } from "./data/designers"
import {
  HeroSection,
  SearchFilterSection,
  DesignerGrid,
  CTASection
} from "./components"

export default function DiscoverPage() {
  const {
    selectedStyles,
    setSelectedStyles,
    searchQuery,
    setSearchQuery,
    favorites,
    toggleFavorite,
    filteredDesigners,
    allStyles
  } = useDiscoverFilters(designers)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />

      <SearchFilterSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedStyles={selectedStyles}
        setSelectedStyles={setSelectedStyles}
        allStyles={allStyles}
      />

      <div className="px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <DesignerGrid
            designers={filteredDesigners}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      </div>

      <CTASection />
    </div>
  )
}
