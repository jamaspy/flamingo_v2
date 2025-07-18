import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { HowItWorks } from "@/components/complex";
import { PricingSection } from "@/components/complex";
import { Copyright } from "lucide-react";
export default function HomePage() {
  return (
    <main className="bg-flamingo-secondary">
      <section className="flex flex-col items-center justify-center min-h-screen w-full bg-[url('/hero.png')] bg-cover bg-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center gap-8">
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-flamingo-primary to-blue-950 text-5xl md:text-8xl leading-tight w-full md:max-w-4xl text-shadow-xl">
            Streamline Your Tour Management
          </h1>
          <p className="text-slate-900 text-lg xl:text-2xl lg:max-w-3xl">
            All your schedules, budgets & logistics in one intuitive platform.
          </p>

          <Link href="/sign-up">
            <Button
              className="rounded-full font-medium bg-flamingo-primary text-white hover:bg-flamingo-primary/80 cursor-pointer"
              size="lg"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </section>
      <section className="bg-flamingo-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-start justify-start gap-8 md:max-w-3xl w-full p-4">
            <h2 className="text-flamingo-primary text-5xl md:text-7xl font-bold">
              Why flamingo.tm?
            </h2>
            <p className="text-slate-800 text-lg xl:text-2xl lg:max-w-3xl">
              Say goodbye to scattered spreadsheets and endless email threads.
              flamingo.tm centralizes every aspect of your tour so you can focus
              on what matters—your performance.
            </p>
            <Separator className="bg-flamingo-primary" />
            <div className="flex flex-col gap-4 w-full">
              <div className="">
                <p className="text-flamingo-primary text-lg xl:text-2xl lg:max-w-3xl">
                  + Comprehensive Daysheet
                </p>
                <p className="text-slate-800">
                  Access your full itinerary at a glance: call-times,
                  soundchecks, doors, performance slots, curfews — everything in
                  one place.
                </p>
              </div>
              <div className="">
                <p className="text-flamingo-primary text-lg xl:text-2xl lg:max-w-3xl">
                  + Transparent Budgeting
                </p>
                <p className="text-slate-800">
                  Monitor expenses, rider costs, and revenue splits in real time
                  to keep your tour on track financially.
                </p>
              </div>
              <div className="">
                <p className="text-flamingo-primary text-lg xl:text-2xl lg:max-w-3xl">
                  + Venue & Rider Details
                </p>
                <p className="text-slate-800">
                  One-click access to maps, parking information, and key
                  contacts ensures no last-minute surprises.
                </p>
              </div>
            </div>
            <Separator className="bg-flamingo-primary" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src="/mockup.png" alt="Flamingo" width={500} height={800} />
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-r from-flamingo-primary to-blue-950 p-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-start gap-8 md:max-w-3xl w-full p-4">
            <p className="text-white md:text-4xl text-2xl">
              Start your 14-day free trial now.
            </p>
            <Link href="/sign-up">
              <Button className="rounded-full font-medium bg-flamingo-secondary text-slate-900 hover:bg-flamingo-secondary/80 cursor-pointer">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <section className="bg-flamingo-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-8">
          <h2 className="text-flamingo-primary text-5xl md:text-7xl font-bold self-start">
            How it works
          </h2>
          <p className="text-slate-800 text-lg xl:text-2xl lg:max-w-3xl self-start">
            Get your tour organized and your team synchronized in four simple
            steps.
          </p>
          <div className="w-full rounded-tl-2xl rounded-br-2xl border-2 border-dashed border-flamingo-primary p-8">
            <HowItWorks />
          </div>
        </div>
      </section>
      <section className="bg-flamingo-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-8">
          <h2 className="text-flamingo-primary text-5xl md:text-7xl font-bold self-start">
            Simple, Transparent Pricing.
          </h2>
          <p className="text-slate-800 text-lg xl:text-xl lg:max-w-4xl self-start">
            All plans include a 14-day free trial. There are no hidden fees &
            you can cancel anytime.
          </p>{" "}
          <PricingSection />
        </div>
      </section>
      <footer className="bg-gradient-to-r from-flamingo-primary to-blue-950 py-8 text-white text-center flex flex-col items-center justify-center gap-2">
        <p className="text-sm flex items-center justify-center gap-2">
          <Copyright className="w-4 h-4" /> 2025 flamingo.tm
        </p>
        <div className="flex flex-row w-full items-center justify-center gap-2">
          <p className="text-sm flex items-center justify-center gap-2">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
          <p className="text-sm flex items-center justify-center gap-2">
            <Link href="/terms-of-service">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
