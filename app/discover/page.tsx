"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Star, MapPin, Clock, Heart, ArrowLeft } from "lucide-react"
import { Navbar } from '@/components/Navbar'

interface Designer {
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

const designers: Designer[] = [
    {
        id: 1,
        name: "Priya Sharma",
        specialty: "Traditional & Fusion Wear",
        location: "Mumbai, India",
        rating: 4.9,
        reviews: 124,
        responseTime: "2-4 hours",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=800&fit=crop",
        bio: "Specializing in traditional Indian wear with modern fusion elements.",
        styles: ["Traditional", "Fusion", "Bridal"],
        featured: true,
    },
    {
        id: 2,
        name: "Marcus Chen",
        specialty: "Contemporary Streetwear",
        location: "London, UK",
        rating: 4.8,
        reviews: 89,
        responseTime: "3-5 hours",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
        bio: "Bold, experimental designs blending street culture with high fashion.",
        styles: ["Streetwear", "Casual", "Modern"],
        featured: true,
    },
    {
        id: 3,
        name: "Sofia Rodriguez",
        specialty: "Couture & Evening Wear",
        location: "Barcelona, Spain",
        rating: 5.0,
        reviews: 156,
        responseTime: "2-3 hours",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop",
        bio: "Handcrafted luxury pieces for the discerning client.",
        styles: ["Couture", "Evening", "Luxury"],
        featured: true,
    },
    {
        id: 4,
        name: "Aisha Okafor",
        specialty: "Sustainable Fashion",
        location: "Lagos, Nigeria",
        rating: 4.7,
        reviews: 67,
        responseTime: "4-6 hours",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=800&fit=crop",
        bio: "Eco-friendly designs celebrating African heritage and sustainability.",
        styles: ["Sustainable", "Ethical", "African"],
        featured: false,
    },
    {
        id: 5,
        name: "James Anderson",
        specialty: "Formal & Business Attire",
        location: "New York, USA",
        rating: 4.9,
        reviews: 203,
        responseTime: "2-4 hours",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop",
        bio: "Expert in tailored formal wear and business attire.",
        styles: ["Formal", "Business", "Tailoring"],
        featured: false,
    },
    {
        id: 6,
        name: "Yuki Tanaka",
        specialty: "Minimalist & Avant-Garde",
        location: "Tokyo, Japan",
        rating: 4.8,
        reviews: 91,
        responseTime: "5-7 hours",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop",
        bio: "Pushing boundaries with innovative, minimalist designs.",
        styles: ["Minimalist", "Avant-Garde", "Contemporary"],
        featured: false,
    },
]

export default function DiscoverPage() {
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

    const filteredDesigners = designers.filter((designer) => {
        const matchesSearch =
            designer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            designer.specialty.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesStyles = selectedStyles.length === 0 || selectedStyles.some((style) => designer.styles.includes(style))

        const matchesFilter = filterType === "all" || (filterType === "featured" && designer.featured)

        return matchesSearch && matchesStyles && matchesFilter
    })

    const allStyles = Array.from(new Set(designers.flatMap((d) => d.styles)))

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/20 to-transparent" />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-7xl font-light mb-6 animate-fade-in-up tracking-wide">
                        Discover Your Designer
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                        Connect with independent fashion designers from around the world
                    </p>
                    <Link href="/custom-request">
                        <Button
                            size="lg"
                            className="animate-fade-in-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]"
                        >
                            Post Custom Request
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Filters & Search */}
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
                                        setSelectedStyles((prev) =>
                                            prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style],
                                        )
                                    }}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedStyles.includes(style)
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

            {/* Designer Grid */}
            <div className="px-6 md:px-12 py-12">
                <div className="max-w-6xl mx-auto">
                    {filteredDesigners.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">No designers found matching your filters.</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredDesigners.map((designer, index) => (
                                <div
                                    key={designer.id}
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

                                        {/* Favorite Button */}
                                        <button
                                            onClick={(e) => toggleFavorite(designer.id, e)}
                                            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors z-10"
                                        >
                                            <Heart
                                                className={`h-5 w-5 ${favorites.includes(designer.id)
                                                    ? "fill-primary text-primary"
                                                    : "text-gray-600"
                                                    }`}
                                            />
                                        </button>

                                        {designer.featured && (
                                            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground z-10 font-semibold">
                                                Featured
                                            </Badge>
                                        )}

                                        {/* Hover Overlay */}
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

                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{designer.bio}</p>

                                        {/* Meta Info */}
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

                                        {/* Style Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {designer.styles.slice(0, 2).map((style) => (
                                                <Badge key={style} variant="outline" className="text-xs">
                                                    {style}
                                                </Badge>
                                            ))}
                                        </div>

                                        <p className="text-xs text-muted-foreground">
                                            {designer.reviews} reviews
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* CTA Section */}
            <section className="relative py-24 px-4 text-center overflow-hidden bg-primary text-primary-foreground">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-wide">
                        Can't find what you're looking for?
                    </h2>
                    <p className="text-lg md:text-xl mb-10 opacity-90">
                        Post your custom design request and let designers come to you
                    </p>
                    <Link href="/custom-request">
                        <Button
                            variant="secondary"
                            size="lg"
                        >
                            Post a Request
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
