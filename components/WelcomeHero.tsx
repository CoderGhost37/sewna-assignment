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
                    <h1 className="text-6xl md:text-6xl lg:text-7xl mb-2 text-white tracking-tight leading-tight animate-fade-in-up opacity-0 [animation-delay:200ms]">
                        I am a designer
                    </h1>
                    <p className="text-base md:text-2xl text-gray-300 max-w-lg leading-relaxed font-medium animate-fade-in-up opacity-0 [animation-delay:400ms]">
                        Showcase your work and connect with clients globally
                    </p>
                    <div className="mt-8 w-16 h-1 bg-accent-foreground animate-fade-in opacity-0 [animation-delay:600ms]" />
                </div>

                <div className="absolute bottom-8 right-8 text-accent-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-screen px-8 text-center">
                    <h1 className="text-6xl md:text-6xl lg:text-7xl mb-2 tracking-tight leading-tight animate-fade-in-up opacity-0 [animation-delay:200ms]">
                        I need a designer
                    </h1>
                    <p className="text-base md:text-2xl text-black/80 max-w-lg leading-relaxed font-medium animate-fade-in-up opacity-0 [animation-delay:400ms]">
                        Discover independent designers for your custom outfit
                    </p>
                    <div className="mt-8 w-16 h-1 bg-accent-foreground animate-fade-in opacity-0 [animation-delay:600ms]" />
                </div>

                <div className="absolute bottom-8 left-8 text-accent-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    Discover Designers <span className="text-xl">→</span>
                </div>
            </Link>
        </div>
    )
}