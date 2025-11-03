import designerHero from '@/public/designer-hero.jpg';
import clientHero from '@/public/client-hero.jpg';
import Link from 'next/link';
import Image from 'next/image';

export function WelcomeHero() {
    return (
        <div className="grid md:grid-cols-2 min-h-screen">
            {/* Designer Side - Dark */}
            <Link
                className="relative group cursor-pointer overflow-hidden bg-black"
                href="/designers"
            >
                <div className="absolute inset-0">
                    <Image
                        src={designerHero}
                        alt="Fashion designer at work"
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-screen px-8 text-center">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-2 text-white tracking-tight leading-tight">
                        I am a designer
                    </h1>
                    <p className="text-base md:text-2xl text-gray-300 max-w-lg leading-relaxed font-medium">
                        Showcase your work and connect with clients globally
                    </p>
                    <div className="mt-10 w-16 h-0.5 bg-[hsl(var(--accent))]" />
                </div>

                <div className="absolute bottom-8 right-8 text-[hsl(var(--accent))] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    Join as Designer <span className="text-xl">→</span>
                </div>
            </Link>

            {/* Client Side - Light */}
            <Link
                className="relative group cursor-pointer overflow-hidden bg-white"
                href="/discover"
            >
                <div className="absolute inset-0">
                    <Image
                        src={clientHero}
                        alt="Fashion collection"
                        className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-screen px-8 text-center">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-2 text-gray-300 tracking-tight leading-tight">
                        I need a designer
                    </h1>
                    <p className="text-base md:text-2xl text-gray-300 max-w-lg leading-relaxed font-medium">
                        Discover independent designers for your custom outfit
                    </p>
                    <div className="mt-10 w-16 h-0.5 bg-[hsl(var(--accent))]" />
                </div>

                <div className="absolute bottom-8 left-8 text-[hsl(var(--accent))] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    Discover Designers <span className="text-xl">→</span>
                </div>
            </Link>
        </div>
    )
}