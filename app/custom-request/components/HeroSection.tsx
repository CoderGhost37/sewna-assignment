import { Sparkles } from "lucide-react"

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Custom Design Request</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light mb-6 animate-fade-in-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
          Bring Your Vision to Life
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          Share your inspiration and let talented designers create something
          unique for you
        </p>
      </div>
    </section>
  )
}
