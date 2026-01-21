import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Home,
  PawPrint,
  Search,
  ShieldAlert,
  Shovel,
  Sparkles,
  Trash2,
  Construction,
  ShieldCheck,
  TreePine,
  Volume2,
  Zap,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { COMPANY_NAME } from "@/lib/constants";
import { EmojiIcon } from "@/components/emoji-icon";

export const metadata: Metadata = {
  title: "Humane Wildlife Removal",
  description: `Expert, humane removal of bats, raccoons, squirrels, and more. ${COMPANY_NAME} offers safe and effective wildlife control solutions.`,
};

export default function WildlifeRemovalPage() {
  const wildlifeWeHandle = [
    { name: "Bats", unified: "1f987", detail: "Attics / Chimneys" },
    { name: "Mice", unified: "1f42d", detail: "Walls / Kitchens" },
    { name: "Rats", unified: "1f400", detail: "Basements / Garages" },
    { name: "Squirrels", unified: "1f43f-fe0f", detail: "Attics / Eaves" },
    { name: "Raccoons", unified: "1f99d", detail: "Attics / Soffits" },
    { name: "Opossums", unified: "1f43e", detail: "Crawlspaces / Sheds" },
    { name: "Skunks", unified: "1f9a8", detail: "Under decks / Yards" },
    { name: "Birds", unified: "1f426", detail: "Vents / Chimneys" },
    { name: "Snakes", unified: "1f40d", detail: "Garages / Yards" },
    { name: "Moles", unified: "1f573-fe0f", detail: "Lawns / Gardens" },
  ];

  const processSteps = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "1. Inspection",
      description:
        "We conduct a thorough inspection of your property to identify the type of wildlife, entry points, and the extent of the issue.",
    },
    {
      icon: <Trash2 className="w-8 h-8 text-primary" />,
      title: "2. Humane Removal",
      description:
        "Using safe and humane techniques, we remove all wildlife from your home, ensuring their well-being.",
    },
    {
      icon: <Construction className="w-8 h-8 text-primary" />,
      title: "3. Exclusion",
      description:
        "We seal all potential entry points with durable materials to prevent future wildlife from getting back inside.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "4. Prevention",
      description:
        "We provide cleanup/sanitization services and offer recommendations to make your property less attractive to wildlife.",
    },
  ];
  const signCategories = [
    {
      id: "indoors",
      label: "Indoors",
      icon: Home,
      items: [
        {
          icon: Volume2,
          title: "Noises in walls or attic",
          description:
            "Scratching, thumping, or scurrying (often louder at night).",
        },
        {
          icon: ShieldAlert,
          title: "Unusual odors",
          description:
            "Musky smells or strong animal odor that comes and goes.",
        },
        {
          icon: Droplets,
          title: "Droppings, stains, or rub marks",
          description:
            "Droppings, urine marks, or greasy rub marks near vents, soffits, or access points.",
        },
        {
          icon: Home,
          title: "Nesting materials",
          description:
            "Shredded insulation, leaves, or debris in attics, vents, chimneys, or crawlspaces.",
        },
      ],
    },
    {
      id: "damage",
      label: "Damage",
      icon: Zap,
      items: [
        {
          icon: Zap,
          title: "Chewed wires or structural damage",
          description:
            "Gnaw marks on wood, disturbed insulation, or frayed wiring (a serious safety risk).",
        },
        {
          icon: TreePine,
          title: "Entry points getting worse",
          description:
            "Bent vents, torn screens, damaged soffits, or gaps that grow over time.",
        },
      ],
    },
    {
      id: "outdoors",
      label: "Outdoors",
      icon: TreePine,
      items: [
        {
          icon: Trash2,
          title: "Outdoor mess or disturbance",
          description:
            "Tipped trash cans, dug-up soil, or persistent tracks around decks, sheds, or garages.",
        },
        {
          icon: Shovel,
          title: "Yard damage patterns",
          description:
            "Raised tunnels, soft spots, or repeated digging (often points to burrowing activity).",
        },
      ],
    },
  ] as const;

  return (
    <div className="flex flex-col">
      <section className="relative w-full pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary">
        <Image
          src="/images/wildlife/wildfire-head.jpg"
          alt="Wildlife removal header background."
          fill
          className="object-cover contrast-110 saturate-110"
          priority
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="container relative px-4 md:px-6 text-center text-white space-y-4">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-md">
            Humane Wildlife Removal
          </h1>
          <p className="max-w-[700px] mx-auto text-lg md:text-xl drop-shadow">
            Safely and effectively reclaim your home from unwanted wildlife guests.
          </p>
          <Button asChild size="lg" className="font-bold">
            <Link href="/contact">
              Schedule an Inspection{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      <section id="services-grid">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border bg-secondary shadow-xl">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/wildlife/forest.jpg"
                    alt="Forest background for wildlife removal services."
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                      <PawPrint className="h-4 w-4 text-primary" />
                      Wildlife We Handle
                    </div>
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                      A quick field guide for your home
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                      From attic noise to yard damage, we handle the most common
                      nuisance wildlife-humanely and effectively.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border bg-background p-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <Home className="h-4 w-4 text-primary" />
                    Indoors
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Attics, walls, basements, chimneys.
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <TreePine className="h-4 w-4 text-primary" />
                    Outdoors
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Lawns, decks, sheds, garages.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Common wildlife species</h3>
                  <p className="text-muted-foreground">
                    Tap-to-scan lists are great, but this is clearer: quick
                    categories, icons, and typical hotspots.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {wildlifeWeHandle.map((animal) => (
                    <div
                      key={animal.name}
                      className="group relative overflow-hidden rounded-2xl border bg-background p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                      <div className="relative flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                          <EmojiIcon
                            unified={animal.unified}
                            label={animal.name}
                            size={26}
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="font-bold">{animal.name}</p>
                            <Sparkles className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {animal.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="bg-secondary">
                  <CardContent className="p-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                    <div className="space-y-1">
                      <p className="font-semibold">Not sure what you saw?</p>
                      <p className="text-sm text-muted-foreground">
                        Describe it during your inspection-our team will
                        identify the issue and the entry points.
                      </p>
                    </div>
                    <Button asChild className="font-bold">
                      <Link href="/contact">
                        Schedule an Inspection{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="process" className="bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
              Our Proven 4-Step Process
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              We follow a comprehensive process to ensure your wildlife problem
              is solved for good.
            </p>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <ol className="relative space-y-6">
                <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
                {processSteps.map((step) => (
                  <li key={step.title} className="relative pl-14">
                    <div className="absolute left-0 top-0">
                      <div className="h-10 w-10 rounded-2xl border bg-background shadow-sm flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <div className="rounded-2xl border bg-background p-6 shadow-sm">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-headline text-xl font-bold">
                          {step.title}
                        </h3>
                        <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                          <Sparkles className="h-3.5 w-3.5" />
                          Done right, once
                        </span>
                      </div>
                      <p className="mt-2 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <Card className="overflow-hidden bg-background">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/wildlife/wildfire-head.jpg"
                    alt="Wildlife removal service overview."
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      Prevention-first approach
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Removal is only half the job - exclusion and prevention
                      stop repeat visits.
                    </p>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold">What you get</p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        Entry-point discovery and a clear plan.
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        Humane removal with safety in mind.
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        Durable exclusion to prevent re-entry.
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        Recommendations to reduce attractants.
                      </li>
                    </ul>
                  </div>
                  <Button asChild size="lg" className="w-full font-bold">
                    <Link href="/contact">
                      Schedule an Inspection{" "}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="signs" className="bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
              Signs You Have a Wildlife Problem
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              Not sure if you have an unwanted visitor? Use this quick check to
              narrow it down.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-12">
                  <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r bg-gradient-to-br from-secondary to-background p-6">
                    <div className="flex items-center gap-2 font-semibold">
                      <PawPrint className="h-5 w-5 text-primary" />
                      Signal Check
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      These are the most common clues homeowners notice first.
                      If something feels off, a fast inspection can prevent
                      bigger damage.
                    </p>

                    <div className="mt-6 relative mx-auto aspect-square w-full max-w-sm">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
                      <div className="absolute inset-6 rounded-full border border-primary/20" />
                      <div className="absolute inset-14 rounded-full border border-primary/10" />

                      <div className="absolute left-1/2 top-3 -translate-x-1/2">
                        <div className="rounded-2xl border bg-background/80 p-3 backdrop-blur-sm">
                          <Volume2 className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <div className="rounded-2xl border bg-background/80 p-3 backdrop-blur-sm">
                          <Droplets className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="absolute left-1/2 bottom-3 -translate-x-1/2">
                        <div className="rounded-2xl border bg-background/80 p-3 backdrop-blur-sm">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <div className="rounded-2xl border bg-background/80 p-3 backdrop-blur-sm">
                          <Trash2 className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="rounded-2xl border bg-background p-4 shadow-sm">
                          <PawPrint className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl border bg-background p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">
                            When to call right away
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            If you suspect chewed wiring, strong odors, or
                            active nesting, don't wait - these can escalate
                            quickly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6">
                    <Tabs defaultValue="indoors">
                      <TabsList className="w-full grid grid-cols-3">
                        <TabsTrigger value="indoors" className="gap-2">
                          <Home className="h-4 w-4" /> Indoors
                        </TabsTrigger>
                        <TabsTrigger value="damage" className="gap-2">
                          <Zap className="h-4 w-4" /> Damage
                        </TabsTrigger>
                        <TabsTrigger value="outdoors" className="gap-2">
                          <TreePine className="h-4 w-4" /> Outdoors
                        </TabsTrigger>
                      </TabsList>

                      {signCategories.map((category) => (
                        <TabsContent key={category.id} value={category.id}>
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                          >
                            {category.items.map((item, index) => (
                              <AccordionItem
                                key={`${category.id}-${index}`}
                                value={`${category.id}-${index}`}
                              >
                                <AccordionTrigger className="text-left">
                                  <span className="flex items-center gap-3">
                                    <item.icon className="h-5 w-5 text-primary" />
                                    <span>{item.title}</span>
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                  {item.description}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </TabsContent>
                      ))}
                    </Tabs>

                    <div className="mt-6 grid sm:grid-cols-3 gap-3">
                      <div className="rounded-xl border bg-secondary p-4">
                        <p className="font-semibold">Don't seal first</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Trapping wildlife inside can create bigger problems.
                        </p>
                      </div>
                      <div className="rounded-xl border bg-secondary p-4">
                        <p className="font-semibold">Avoid contact</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Keep kids and pets away from droppings and nesting
                          areas.
                        </p>
                      </div>
                      <div className="rounded-xl border bg-secondary p-4">
                        <p className="font-semibold">Get an inspection</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          We locate entry points and recommend next steps.
                        </p>
                      </div>
                    </div>

                    <Button asChild size="lg" className="mt-6 w-full font-bold">
                      <Link href="/contact">
                        Book an Inspection{" "}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}
