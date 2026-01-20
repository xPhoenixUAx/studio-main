import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Leaf,
  Users,
  Smile,
  Star,
  Phone,
  ArrowRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  COMPANY_NAME,
  PEST_SERVICES,
  REVIEWS,
  WILDLIFE_SERVICES,
} from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { EcoShieldIcon } from '@/components/icons/eco-shield-icon';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-home');
  const whyChooseUsImage = PlaceHolderImages.find(
    (img) => img.id === 'why-choose-us'
  );

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Professional & Reliable',
      description: 'Our certified technicians deliver top-quality, dependable service every time.',
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: 'Eco-Friendly Solutions',
      description: 'We use safe, sustainable methods to protect your family and the environment.',
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Family-Owned Values',
      description: 'As a local business, we treat every customer like a neighbor and a friend.',
    },
    {
      icon: <Smile className="w-8 h-8 text-primary" />,
      title: 'Visible Results',
      description: 'We guarantee effective solutions that solve your pest problems for good.',
    },
  ];

  const services = [
    {
      title: 'Wildlife Removal',
      description:
        'Humane and effective removal of unwanted wildlife from your property.',
      link: '/wildlife-removal',
      items: WILDLIFE_SERVICES.slice(0, 4).map((s) => s.name),
      image: PlaceHolderImages.find((img) => img.id === 'service-wildlife'),
    },
    {
      title: 'Pest Control',
      description:
        'Comprehensive solutions for common household pests, tailored to your needs.',
      link: '/pest-control',
      items: PEST_SERVICES.slice(0, 4).map((s) => s.name),
      image: PlaceHolderImages.find((img) => img.id === 'service-pests'),
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative w-full pt-24 md:pt-32 lg:pt-40 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="z-20 space-y-6 text-center md:text-left">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              Your Local Pest & Wildlife Experts
            </div>
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Peace of Mind, Guaranteed.
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto md:mx-0">
              {COMPANY_NAME} provides fast, affordable, and eco-friendly solutions
              to protect your home and family from unwanted pests and wildlife.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="font-bold">
                <Link href="/contact">
                  Get a Free Inspection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/wildlife-removal">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-full w-full">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover rounded-xl"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent md:from-transparent md:bg-gradient-to-r"></div>
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              {whyChooseUsImage && (
                <Image
                  src={whyChooseUsImage.imageUrl}
                  alt={whyChooseUsImage.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={whyChooseUsImage.imageHint}
                />
              )}
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <EcoShieldIcon className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                  Why Choose GreenShield?
                </h2>
              </div>
              <p className="text-muted-foreground text-lg">
                We're not just another pest control company. We're your neighbors,
                committed to providing exceptional service with a personal touch.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="bg-background rounded-full p-2">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
              We offer a full range of services to handle any pest or wildlife
              issue, big or small.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden group">
                <CardHeader className="p-0">
                  <div className="relative h-60 w-full">
                    {service.image && (
                      <Image
                        src={service.image.imageUrl}
                        alt={service.image.description}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint={service.image.imageHint}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="font-headline text-2xl">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="link" className="p-0">
                    <Link href={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
              We're proud of our reputation for quality service and happy
              customers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, index) => {
              const avatarImage = PlaceHolderImages.find(
                (img) => img.id === review.avatarId
              );
              return (
                <Card key={index}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        {avatarImage && (
                          <AvatarImage
                            src={avatarImage.imageUrl}
                            alt={review.name}
                            data-ai-hint={avatarImage.imageHint}
                          />
                        )}
                        <AvatarFallback>
                          {review.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">"{review.comment}"</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="cta" className="bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Ready to Reclaim Your Home?
          </h2>
          <p className="max-w-[600px] mx-auto text-primary-foreground/80">
            Don't let pests take over. Contact us today for a free, no-obligation
            inspection and quote.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="font-bold text-lg"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Get Your Free Inspection
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
