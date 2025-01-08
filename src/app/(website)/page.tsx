import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { HeroAboutSection } from "@/components/website/hero-about-section";
import { HeroSection } from "@/components/website/hero-section";
import { benefit, feature } from "@/constant/feature";
import { FeatureSvg } from "@/icons/FeatureSvg";
import { Divide, SeparatorHorizontal, StarIcon } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <SiteLayout>
      <HeroSection />
      <HeroAboutSection />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-xl text-center">
          Innovate
        </div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight mb-6">
            Transform Your Instagram Strategy with Ease
          </h1>
          <p className="text-md text-muted-foreground mb-8 max-w-2xl mx-auto">
            InstaFlow AI empowers you to streamline your Instagram marketing with advanced automation tools. Our platform features intuitive drag-and-drop flow builders that simplify the process of creating engaging content and automated messaging.
          </p>

        </div>
        <div className="   grid grid-cols-1 md:grid-cols-3 gap-6">
          {
            feature.map((element, index) => {
              return (
                <div className="flex justify-center flex-col items-center" key={index}>
                  <FeatureSvg />
                  <div className="text-center text-2xl font-bold">
                    {element.title}
                  </div>
                  <div className="text-md text-center ">
                    {element.description}
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="flex justify-center flex-col items-center">
          <div className="flex">
            {
              [...Array(5)].map((_, i) => (
                <StarIcon fill="true" key={i} />
              ))
            }
          </div>
          <div className="text-2xl font-bold text-center mt-5">
            "InstaFlow AI has transformed our social media strategy! The automation features save us hours each week, allowing us to focus on what matters most."
          </div>

          <div>
            <div className="mt-6 flex items-center h-10 space-x-4">
              <div className="space-y-1 ">
                <h4 className="text-sm font-medium leading-none">Amit Parmar</h4>
                <p className="text-sm text-muted-foreground">
                  Gamming Content Creator
                </p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex h-5 items-center space-x-4 text-sm">
                <h4 className="text-xl font-bold">Instaflow</h4>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-black ">
        <div className="container mx-auto py-48">
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div>
              <p className="text-white">success</p>
              <h1 className="text-white text-6xl font-bold ">Transform Your Instagram Strategy with Data</h1>
            </div>
            <div>
              <p className="text-white">InstaFlow AI empowers users to achieve remarkable growth through intelligent automation. Our platform has helped countless businesses enhance their engagement and streamline their processes. Join the ranks of successful users who have transformed their Instagram presence.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start mt-8">
                <Button size="lg" className="text-lg px-8 text-white" variant="ghost">
                  Learn more
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
          <div className="  mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              benefit.map((element, index) => {
                return (
                  <div className="flex justify-center flex-col items-start ps-4 border-l border-solid border-white" key={index}>
                    <div className="text-left text-5xl font-bold text-white">
                      {element.benefitPercentage}
                    </div>
                    <div className="text-md text-left text-white">
                      {element.benefitText}
                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-2">
          <div className="left  flex justify-center items-center">

            <div className="text-left max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Unlock Your Instagram Potential
              </h1>
              <p className=" text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the power of automation with a free trial or schedule a personalized demo today!
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

      <div className="w-full bg-black">
        <div className="container mx-auto py-24">
          <h2 className="text-white text-5xl  pb-2 font-bold">Stay Updated with InstaFlow AI</h2>
          <p className="text-white text-lg py-6 ">Subscribe to our newsletter for the latest updates, tips, and exclusive offers from InstaFlow AI.</p>
          <div className="subscribe_form">
            <div className="flex w-full max-w-lg pb-4  items-center space-x-2">
              <Input type="email" placeholder="Email"  className="rounded-none" />
              <Button type="submit" className="bg-white text-primary rounded-none">Subscribe</Button>
             
            </div>
            <span className="text-white text-sm  font-light">By clicking Join Now, you agree to our Terms and Conditions.</span>
          </div>
        </div>
      </div>
      </SiteLayout>
    </>
  );
}
