import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Automate Your Instagram with InstaFlow AI
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Unlock the power of AI to streamline your Instagram marketing. With InstaFlow AI, you can create engaging content, automate messaging, and analyze performance effortlessly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            Learn More
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
          >
            <Image
              src={`/placeholder.svg?height=300&width=400`}
              alt={`Feature showcase ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

