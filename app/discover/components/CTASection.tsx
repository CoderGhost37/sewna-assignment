import Link from "next/link"
import { Button } from "@/components/ui/button"

export const CTASection = () => {
  return (
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
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
          >
            Post a Request
          </Button>
        </Link>
      </div>
    </section>
  )
}
