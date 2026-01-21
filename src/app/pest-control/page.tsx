import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Microscope,
  SprayCan,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { COMPANY_NAME, PEST_SERVICES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { EmojiIcon } from "@/components/emoji-icon";

export const metadata: Metadata = {
  title: "Pest Control Services",
  description: `Effective and eco-friendly solutions for common household pests like ants, spiders, roaches, and more. Keep your home safe with ${COMPANY_NAME}.`,
};

export default function PestControlPage() {
  const getPestEmoji = (name: string) => {
    const text = name.toLowerCase();
    if (text.includes("ant")) return "1f41c";
    if (text.includes("spider")) return "1f577-fe0f";
    if (text.includes("roach")) return "1fab3";
    if (text.includes("cricket")) return "1f997";
    if (text.includes("mouse") || text.includes("mice")) return "1f42d";
    if (text.includes("rat")) return "1f400";
    if (text.includes("earwig")) return "1fab2";
    if (text.includes("silverfish")) return "1f41b";
    if (text.includes("moth")) return "1f98b";
    if (text.includes("centipede") || text.includes("millipede"))
      return "1f41b";
    if (text.includes("termite")) return "1f41c";
    return "1f41b";
  };

  const pestInfoByName: Record<
    string,
    {
      summary: string;
      signs: string;
      risks: string;
      treatment: string;
      category: "insects" | "rodents" | "wood";
    }
  > = {
    Ants: {
      category: "insects",
      summary:
        "Persistent trails and repeat activity around food and moisture.",
      signs:
        "Visible trails, small piles of soil, and activity near sinks or pantries.",
      risks:
        "Food contamination and rapid colony growth if the nest isn’t addressed.",
      treatment:
        "Targeted baiting + perimeter barriers and entry-point sealing.",
    },
    Spiders: {
      category: "insects",
      summary: "Webbing and sightings in corners, basements, and garages.",
      signs:
        "Webs, egg sacs, and increased sightings around lights or clutter.",
      risks:
        "Most are harmless, but bites are possible and indicate other pests nearby.",
      treatment:
        "Reduce harborage + targeted treatment and prevention around entry points.",
    },
    Cockroaches: {
      category: "insects",
      summary:
        "Hardy indoor pests that thrive in warmth, moisture, and crumbs.",
      signs:
        "Pepper-like droppings, egg cases, musty odor, and nighttime activity.",
      risks: "Can spread bacteria and trigger allergies/asthma.",
      treatment:
        "Gel baits + growth regulators, sanitation guidance, and exclusion.",
    },
    Crickets: {
      category: "insects",
      summary:
        "Noisy at night and often attracted to moisture and warm spaces.",
      signs:
        "Chirping, sightings in basements/garages, and minor fabric/paper damage.",
      risks: "Nuisance infestations and contamination in storage areas.",
      treatment: "Moisture reduction + perimeter treatments and sealing gaps.",
    },
    Mice: {
      category: "rodents",
      summary: "Small, fast breeders that squeeze through tiny openings.",
      signs: "Droppings, gnaw marks, scratching sounds, and greasy rub marks.",
      risks:
        "Disease exposure, food contamination, and electrical/fire hazards.",
      treatment:
        "Trapping + exclusion work to close entry points and prevent return.",
    },
    Rats: {
      category: "rodents",
      summary:
        "Stronger, more destructive rodents often linked to outdoor access.",
      signs: "Larger droppings, burrows, gnaw damage, and frequent sightings.",
      risks: "Serious contamination risks and structural/property damage.",
      treatment:
        "Baiting/trapping strategy + exterior exclusion and habitat changes.",
    },
    Earwigs: {
      category: "insects",
      summary:
        "Often show up after rain—drawn to damp areas around foundations.",
      signs: "Sightings in bathrooms, kitchens, and near baseboards or mulch.",
      risks: "Mostly nuisance, but can indicate moisture problems.",
      treatment: "Moisture control + targeted exterior treatments and sealing.",
    },
    Silverfish: {
      category: "insects",
      summary: "Paper-loving pests that prefer dark, humid rooms and storage.",
      signs:
        "Damage to books/paper, shed skins, and sightings in bathrooms or basements.",
      risks: "Damage to stored items and ongoing humidity-related issues.",
      treatment: "Humidity reduction + crack/crevice treatment and prevention.",
    },
    Moths: {
      category: "insects",
      summary: "Clothing and pantry moths can quietly damage stored items.",
      signs:
        "Holes in fabrics, webbing in corners, or larvae near stored foods.",
      risks: "Damage to clothing, carpets, and pantry goods.",
      treatment:
        "Targeted treatment + storage/cleaning guidance and monitoring traps.",
    },
    Centipedes: {
      category: "insects",
      summary: "Fast, nocturnal hunters that appear where other bugs thrive.",
      signs: "Sightings at night in basements, bathrooms, and damp areas.",
      risks: "Possible bites and a sign of underlying moisture/pest activity.",
      treatment: "Moisture reduction + perimeter control and sealing.",
    },
    Millipedes: {
      category: "insects",
      summary:
        "Often wander indoors when conditions outside are too wet or dry.",
      signs:
        "Slow-moving pests near doors/windows; curled bodies if they die indoors.",
      risks: "Nuisance and moisture-related entry pathways.",
      treatment:
        "Exterior habitat adjustments + sealing and perimeter protection.",
    },
    Termites: {
      category: "wood",
      summary: "Wood-destroying pests that can cause expensive hidden damage.",
      signs:
        "Mud tubes, hollow-sounding wood, shed wings, or swarmers seasonally.",
      risks: "Structural damage if left untreated.",
      treatment:
        "Inspection + targeted treatment plan (baiting or localized solutions).",
    },
  };

  const pestDetails = PEST_SERVICES.map((pest) => {
    const info = pestInfoByName[pest.name] ?? {
      category: "insects" as const,
      summary: "Common household pest activity and prevention guidance.",
      signs: "Sightings, droppings, nests, or signs of feeding and movement.",
      risks: "Property damage, contamination, or escalating infestations.",
      treatment: "Targeted treatment paired with prevention and exclusion.",
    };

    return { ...pest, ...info };
  });

  const pestsByCategory = {
    all: pestDetails,
    insects: pestDetails.filter((p) => p.category === "insects"),
    rodents: pestDetails.filter((p) => p.category === "rodents"),
    wood: pestDetails.filter((p) => p.category === "wood"),
  } as const;

  const treatmentPlan = [
    {
      id: "identify",
      title: "Identify",
      icon: Microscope,
      description:
        "We confirm what it is, where it is coming from, and why it is happening.",
      bullets: [
        "Pinpoint hotspots and entry points",
        "Assess conditions that attract pests (food, moisture, gaps)",
        "Recommend the right plan for your home",
      ],
    },
    {
      id: "treat",
      title: "Treat",
      icon: SprayCan,
      description:
        "We use targeted, family-safe methods designed to solve the problem, not just mask it.",
      bullets: [
        "Precision treatments where pests live and travel",
        "Minimize exposure with smart placement and timing",
        "Clear guidance on what to expect next",
      ],
    },
    {
      id: "protect",
      title: "Protect",
      icon: ShieldCheck,
      description:
        "We help prevent repeat visits with practical fixes and a protective perimeter strategy.",
      bullets: [
        "Close gaps and reduce harborage opportunities",
        "Create a preventative barrier around the home",
        "Maintenance options to keep problems from returning",
      ],
    },
  ] as const;

  return (
    <div className="flex flex-col">
      <section className="relative w-full pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary">
        <Image
          src="/images/pests/head-pests.jpg"
          alt="Pest control header background."
          fill
          className="object-cover contrast-110 saturate-110"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative px-4 md:px-6 text-center text-white space-y-4">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-md">
            Reliable Pest Control
          </h1>
          <p className="max-w-[700px] mx-auto text-lg md:text-xl drop-shadow">
            Customized, eco-friendly solutions for a pest-protected home.
          </p>
          <Button asChild size="lg" className="font-bold">
            <Link href="/contact">
              Request an Estimate <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="common-pests">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-2xl border bg-secondary shadow-xl">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/pests/ants.jpg"
                    alt="Ant activity around the home."
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                      <EmojiIcon unified="1f41b" label="Pests" size={16} />
                      Common Household Pests We Handle
                    </div>
                    <p className="text-muted-foreground md:text-lg">
                      Browse by category and see quick signs, risks, and the
                      typical treatment approach.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl border bg-background p-4">
                  <p className="text-2xl font-bold">{pestDetails.length}</p>
                  <p className="text-xs text-muted-foreground">Pests covered</p>
                </div>
                <div className="rounded-xl border bg-background p-4">
                  <p className="text-2xl font-bold">Eco</p>
                  <p className="text-xs text-muted-foreground">
                    Family-safe focus
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-4">
                  <p className="text-2xl font-bold">Plan</p>
                  <p className="text-xs text-muted-foreground">
                    Prevent return
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Tabs defaultValue="all">
                <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="insects">Insects</TabsTrigger>
                  <TabsTrigger value="rodents">Rodents</TabsTrigger>
                  <TabsTrigger value="wood">Wood-Destroying</TabsTrigger>
                </TabsList>

                {(
                  [
                    ["all", pestsByCategory.all],
                    ["insects", pestsByCategory.insects],
                    ["rodents", pestsByCategory.rodents],
                    ["wood", pestsByCategory.wood],
                  ] as const
                ).map(([categoryId, pests]) => (
                  <TabsContent
                    key={categoryId}
                    value={categoryId}
                    className="mt-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      {pests.map((pest) => (
                        <Card
                          key={pest.name}
                          className="group overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          <CardContent className="p-6 space-y-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                                  <EmojiIcon
                                    unified={getPestEmoji(pest.name)}
                                    label={pest.name}
                                    size={26}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <p className="font-bold text-lg">
                                    {pest.name}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {pest.summary}
                                  </p>
                                </div>
                              </div>
                              <Badge variant="secondary" className="shrink-0">
                                {categoryId === "all"
                                  ? pest.category.toUpperCase()
                                  : categoryId.toUpperCase()}
                              </Badge>
                            </div>

                            <div className="grid gap-3 text-sm">
                              <div className="flex items-start gap-2">
                                <EmojiIcon
                                  unified="1f440"
                                  label="Signs"
                                  size={16}
                                  className="mt-0.5"
                                />
                                <span className="text-muted-foreground">
                                  <span className="font-semibold text-foreground">
                                    Signs:
                                  </span>{" "}
                                  {pest.signs}
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <EmojiIcon
                                  unified="26a0-fe0f"
                                  label="Risks"
                                  size={16}
                                  className="mt-0.5"
                                />
                                <span className="text-muted-foreground">
                                  <span className="font-semibold text-foreground">
                                    Risks:
                                  </span>{" "}
                                  {pest.risks}
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <EmojiIcon
                                  unified="1f6e1-fe0f"
                                  label="Treatment"
                                  size={16}
                                  className="mt-0.5"
                                />
                                <span className="text-muted-foreground">
                                  <span className="font-semibold text-foreground">
                                    Treatment:
                                  </span>{" "}
                                  {pest.treatment}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <section id="treatment-plan" className="bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
              Our Pest Control Plan
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              A simple yet effective three-step plan to keep your home
              protected.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden bg-background">
              <CardContent className="p-0">
                <Tabs defaultValue={treatmentPlan[0].id}>
                  <div className="grid lg:grid-cols-12">
                    <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r bg-gradient-to-br from-secondary to-background p-6">
                      <p className="font-semibold">How we solve it</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Choose a step to see what happens and why it works.
                      </p>

                      <TabsList className="mt-6 w-full grid grid-cols-3 lg:grid-cols-1 h-auto bg-transparent p-0 gap-2">
                        {treatmentPlan.map((step, index) => (
                          <TabsTrigger
                            key={step.id}
                            value={step.id}
                            className="justify-start gap-3 rounded-xl border bg-background px-4 py-3 text-left data-[state=active]:bg-secondary data-[state=active]:shadow-none"
                          >
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-foreground">
                              {index + 1}
                            </span>
                            <span className="flex items-center gap-2">
                              <step.icon className="h-4 w-4 text-primary" />
                              {step.title}
                            </span>
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      <div className="mt-6 rounded-xl border bg-background p-4">
                        <p className="text-sm font-semibold">Quick promise</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Clear plan, targeted treatment, and prevention focused
                          on keeping pests out.
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-8 p-6">
                      {treatmentPlan.map((step) => (
                        <TabsContent
                          key={step.id}
                          value={step.id}
                          className="m-0"
                        >
                          <div className="grid lg:grid-cols-12 gap-6 items-start">
                            <div className="lg:col-span-7 space-y-4">
                              <div className="flex items-start gap-4">
                                <div className="rounded-2xl bg-secondary p-4">
                                  <step.icon className="h-7 w-7 text-primary" />
                                </div>
                                <div>
                                  <h3 className="text-2xl font-bold">
                                    {step.title}
                                  </h3>
                                  <p className="mt-1 text-muted-foreground">
                                    {step.description}
                                  </p>
                                </div>
                              </div>

                              <ul className="space-y-3 text-sm text-muted-foreground">
                                {step.bullets.map((bullet) => (
                                  <li
                                    key={bullet}
                                    className="flex items-start gap-3"
                                  >
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="lg:col-span-5">
                              <div className="relative overflow-hidden rounded-2xl border bg-secondary">
                                <div className="relative aspect-[4/3]">
                                  <Image
                                    src="/images/pests/head-pests.jpg"
                                    alt="Pest control consultation."
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 35vw"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                                  <div className="absolute inset-x-0 bottom-0 p-5 space-y-3">
                                    <Button
                                      asChild
                                      className="w-full font-bold"
                                    >
                                      <Link href="/contact">
                                        Request an Estimate{" "}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                      </Link>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      ))}
                    </div>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
