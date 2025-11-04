import Link from "next/link"
import { Button } from "@/components/ui/button"

export const HeroSection = () => {
  return (
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
  )
}
