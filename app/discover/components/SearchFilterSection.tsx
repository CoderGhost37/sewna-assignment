import { Search, Filter } from "lucide-react"

interface SearchFilterSectionProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedStyles: string[]
  setSelectedStyles: (styles: string[] | ((prev: string[]) => string[])) => void
  allStyles: string[]
}

export const SearchFilterSection = ({
  searchQuery,
  setSearchQuery,
  selectedStyles,
  setSelectedStyles,
  allStyles
}: SearchFilterSectionProps) => {
  return (
    <div className="bg-secondary border-b border-border px-6 md:px-12 py-6 animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name or specialty..."
            className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Filter className="w-4 h-4" />
            Filter by Style
          </div>
          <div className="flex flex-wrap gap-2">
            {allStyles.map((style) => (
              <button
                key={style}
                onClick={() => {
                  setSelectedStyles((prev: string[]) =>
                    prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
                  )
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedStyles.includes(style)
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border hover:border-primary"
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
