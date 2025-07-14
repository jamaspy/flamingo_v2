import { Calendar, MapPin, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Tour",
      description: "Enter tour name, dates, and cities.",
      icon: Calendar,
      details:
        "Set up your tour foundation with essential information that keeps everyone on the same page from day one.",
    },
    {
      number: "02",
      title: "Add Stops",
      description:
        "Populate each date with venue details, timings, and special notes.",
      icon: MapPin,
      details:
        "Build out your complete itinerary with venue information, show times, load-in schedules, and important reminders.",
    },
    {
      number: "03",
      title: "Invite Your Team",
      description:
        "Share a secure link so managers, crew, and artists stay perfectly aligned.",
      icon: Users,
      details:
        "Collaborate seamlessly by giving your entire team access to real-time tour information through secure sharing.",
    },
    {
      number: "04",
      title: "Go Live",
      description:
        "Instant updates push to every device—late changes and new notes sync automatically.",
      icon: Zap,
      details:
        "Stay agile with automatic synchronization that ensures everyone has the latest information, no matter where they are.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto">
      <div className="grid gap-8 md:gap-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isEven = index % 2 === 1;

          return (
            <div
              key={step.number}
              className={`flex flex-col ${
                isEven ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-12`}
            >
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-flamingo-primary text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-flamingo-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  {step.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.details}
                </p>
              </div>

              <div className="flex-1 w-full max-w-md">
                <Card className="border-2 border-dashed border-muted-foreground/20 bg-muted/5">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <div className="h-2 bg-muted rounded flex-1"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                        <div className="h-2 bg-muted rounded flex-1"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-muted"></div>
                        <div className="h-2 bg-muted rounded flex-1"></div>
                      </div>
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-4 h-4 text-primary" />
                          <div className="h-2 bg-primary/30 rounded w-20"></div>
                        </div>
                        <div className="space-y-1">
                          <div className="h-1.5 bg-muted rounded w-full"></div>
                          <div className="h-1.5 bg-muted rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
          <Zap className="w-4 h-4" />
          Ready in minutes, not hours
        </div>
      </div>
    </section>
  );
}
