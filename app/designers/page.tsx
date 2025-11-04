"use client"

import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus, Upload } from 'lucide-react';
import { useState } from 'react';
import SummerCollectionImg from '@/public/summer-collection-display.png';
import EveningWearImg from '@/public/evening-wear.jpg';
import NewImg from '@/public/new-design.jpg';
import Image from 'next/image';

export default function DiscoverPage() {
    const [portfolioItems, setPortfolioItems] = useState([
        { id: 1, title: "Summer Collection 2024", image: SummerCollectionImg },
        { id: 2, title: "Evening Wear", image: EveningWearImg },
    ])
    const [showUploadModal, setShowUploadModal] = useState(false)

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-20 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-7xl font-light mb-8 animate-fade-in-up tracking-wide">
                        Join SEWNA as a Designer
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                        Showcase your portfolio, connect with clients worldwide, and grow your independent fashion business
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    <div className="p-8 rounded-lg bg-secondary/50 backdrop-blur-sm hover:bg-secondary transition-all duration-300 animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] group">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                            <span className="text-3xl">🎨</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Showcase Your Work</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Create a stunning portfolio to display your designs and craftsmanship
                        </p>
                    </div>

                    <div className="p-8 rounded-lg bg-secondary/50 backdrop-blur-sm hover:bg-secondary transition-all duration-300 animate-fade-in-up [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards] group">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                            <span className="text-3xl">🌍</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Global Reach</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Connect with clients from around the world seeking custom designs
                        </p>
                    </div>

                    <div className="p-8 rounded-lg bg-secondary/50 backdrop-blur-sm hover:bg-secondary transition-all duration-300 animate-fade-in-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards] group">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                            <span className="text-3xl">💼</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Grow Your Business</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Manage projects, communicate with clients, and build your brand
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Why Join */}
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold mb-6">Why Join SEWNA?</h2>
                        <ul className="space-y-4">
                            {[
                                "Direct access to clients",
                                "Keep 85% of your earnings",
                                "Build your portfolio",
                                "24/7 support team",
                                "Flexible scheduling",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="text-[#00b67f] font-bold">✓</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Portfolio Section */}
                    <div className="md:col-span-2">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold">Your Portfolio</h2>
                                <button
                                    onClick={() => setShowUploadModal(true)}
                                    className="flex items-center gap-2 bg-[#00b67f] text-white px-4 py-2 rounded-lg hover:bg-[#00b67f]/90 transition font-semibold"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Design
                                </button>
                            </div>

                            {/* Portfolio Grid */}
                            {portfolioItems.length > 0 ? (
                                <div className="grid md:grid-cols-2 gap-4">
                                    {portfolioItems.map((item) => (
                                        <div key={item.id} className="relative group">
                                            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={400}
                                                    height={400}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition rounded-lg flex items-end p-4">
                                                <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Upload New */}
                                    <button
                                        onClick={() => setShowUploadModal(true)}
                                        className="aspect-square border-2 border-dashed border-gray-300 rounded-lg hover:border-[#00b67f] transition flex flex-col items-center justify-center gap-2 text-gray-600 hover:text-[#00b67f]"
                                    >
                                        <Upload className="w-6 h-6" />
                                        <span className="text-sm font-medium">Upload Design</span>
                                    </button>
                                </div>
                            ) : (
                                <div
                                    onClick={() => setShowUploadModal(true)}
                                    className="border-2 border-dashed border-gray-300 rounded-lg hover:border-[#00b67f] transition p-12 text-center cursor-pointer"
                                >
                                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Upload Your First Design</h3>
                                    <p className="text-gray-500 mb-4">
                                        Start building your portfolio. Showcase your best work to attract clients.
                                    </p>
                                    <span className="inline-block px-4 py-2 bg-[#00b67f] text-white rounded-lg text-sm font-semibold">
                                        Choose File
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-50 border border-black/10 rounded-lg p-8 text-center space-y-4">
                    <h3 className="text-2xl font-bold">Ready to join SEWNA?</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Complete your profile, showcase your portfolio, and start connecting with clients who appreciate your craft.
                    </p>
                    <Button className="bg-black text-white hover:bg-black/80 px-8 py-6 text-base">
                        Complete Your Profile
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>

            {/* Upload Modal */}
            {showUploadModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Upload Design</h2>
                            <p className="text-gray-600">Add a new design to your portfolio</p>
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#00b67f] transition cursor-pointer">
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-600 text-sm">Drag and drop your image here, or click to select</p>
                        </div>

                        <input
                            type="text"
                            placeholder="Design title (e.g., Summer Dress)"
                            className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-[#00b67f]"
                        />

                        <textarea
                            placeholder="Describe your design..."
                            rows={3}
                            className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-[#00b67f]"
                        />

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowUploadModal(false)}
                                className="flex-1 px-4 py-2 border border-black/20 rounded-lg hover:bg-gray-50 transition font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setPortfolioItems([
                                        ...portfolioItems,
                                        {
                                            id: portfolioItems.length + 1,
                                            title: "New Design",
                                            image: NewImg,
                                        },
                                    ])
                                    setShowUploadModal(false)
                                }}
                                className="flex-1 px-4 py-2 bg-[#00b67f] text-white rounded-lg hover:bg-[#00b67f]/90 transition font-medium"
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}