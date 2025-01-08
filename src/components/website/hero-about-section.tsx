import Image from "next/image";
import { Button } from "../ui/button";

export function HeroAboutSection() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-2">
          <div className="left  flex justify-center items-center">

            <div className="text-left max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Automate Your Instagram with InstaFlow AI
              </h1>
              <p className=" text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                InstaFlow AI empowers small businesses and influencers to effortlessly manage their Instagram presence. With features like automated messaging and AI-driven content suggestions, you can focus on what truly matters—growing your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Button size="lg" className="text-lg px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="right">
            <div

              className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
            >
              <Image
                src={`/placeholder.svg?height=300&width=400`}
                alt={`Feature showcase `}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}