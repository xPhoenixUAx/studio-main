'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection() {
  const [topic, setTopic] = useState('general');

  const topics = [
    { id: 'general', name: 'General Questions' },
    { id: 'wildlife', name: 'Wildlife Removal' },
    { id: 'pest', name: 'Pest Control' },
    { id: 'billing', name: 'Billing & Pricing' },
  ];

  const faqsByTopic: Record<string, FaqItem[]> = {
    general: [
      {
        question: 'Do you offer inspections?',
        answer:
          'Yes. We start with an initial inspection to understand the issue, identify entry points, and recommend the right plan.',
      },
      {
        question: 'Are your treatments safe for kids and pets?',
        answer:
          'We prioritize eco-friendly, family-safe solutions. We’ll explain the products and precautions before any treatment begins.',
      },
      {
        question: 'How quickly can you schedule service?',
        answer:
          'In many cases we can schedule within 24–48 hours. For urgent situations, call and we’ll do our best to prioritize you.',
      },
      {
        question: 'Do you guarantee your work?',
        answer:
          'We stand behind our service. Guarantee terms depend on the type of problem and the plan selected, and we’ll review those details during the inspection.',
      },
      {
        question: 'What should I do before you arrive?',
        answer:
          'If possible, clear access to the affected areas and note where you’ve seen activity. No special prep is required for most visits.',
      },
    ],
    wildlife: [
      {
        question: 'Is wildlife removal humane?',
        answer:
          'Yes. Our approach focuses on humane removal and long-term prevention through exclusion and repairs.',
      },
      {
        question: 'Can you remove animals from attics and walls?',
        answer:
          'Yes. We inspect, safely remove the animal(s), locate entry points, and recommend sealing/exclusion to prevent return.',
      },
      {
        question: 'Will the animals come back after removal?',
        answer:
          'They can if entry points remain open. That’s why exclusion (sealing and repairs) is a key part of our process.',
      },
      {
        question: 'Do you handle cleanup after wildlife?',
        answer:
          'We can advise on cleanup and offer solutions depending on the situation, including deodorizing and contamination mitigation when needed.',
      },
      {
        question: 'What are signs of wildlife in the home?',
        answer:
          'Noises at night, scratching in walls/ceilings, droppings, damaged vents/soffits, and strong odors are common indicators.',
      },
    ],
    pest: [
      {
        question: 'How do you determine what pest I have?',
        answer:
          'We identify the pest during inspection based on signs like droppings, trails, nests, and damage, then tailor the treatment plan.',
      },
      {
        question: 'How many treatments are usually needed?',
        answer:
          'It depends on the pest and severity. Some issues resolve in one visit, while others require follow-ups for full control.',
      },
      {
        question: 'Do you treat the inside, outside, or both?',
        answer:
          'Most plans focus on the exterior to prevent entry, with interior treatment as needed for active infestations.',
      },
      {
        question: 'How can I prevent pests from returning?',
        answer:
          'Seal cracks and gaps, reduce moisture, store food securely, and keep clutter away from foundations. We’ll highlight key fixes during inspection.',
      },
      {
        question: 'Do you offer eco-friendly pest control options?',
        answer:
          'Yes. We use targeted, responsible methods and choose products and placement to minimize impact while staying effective.',
      },
    ],
    billing: [
      {
        question: 'How is pricing determined?',
        answer:
          'Pricing depends on the pest/wildlife type, severity, property size, access conditions, and the level of exclusion or follow-up needed.',
      },
      {
        question: 'Do you provide estimates before starting?',
        answer:
          'Yes. After inspection, we explain the recommended plan and costs so you can decide before work begins.',
      },
      {
        question: 'Do you offer ongoing service plans?',
        answer:
          'We can provide recurring maintenance options depending on your needs and local conditions.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We typically accept common card and digital payment options. If you have a preference, ask when scheduling.',
      },
      {
        question: 'Are there additional fees for emergency visits?',
        answer:
          'Urgent or after-hours visits may include an additional fee depending on availability. We’ll confirm any extra cost upfront.',
      },
    ],
  };

  const faqItems = faqsByTopic[topic] ?? [];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
          Get Instant Answers
        </h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
          Select a topic to browse frequently asked questions.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {topics.map((t) => (
          <Button
            key={t.id}
            variant={topic === t.id ? 'default' : 'outline'}
            onClick={() => setTopic(t.id)}
          >
            {t.name}
          </Button>
        ))}
      </div>
      
      <div className="min-h-[300px]">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, index) => (
            <AccordionItem value={`item-${topic}-${index}`} key={`${topic}-${index}`}>
              <AccordionTrigger className="text-lg text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
