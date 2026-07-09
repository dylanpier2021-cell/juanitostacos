import { siteConfig, fullAddress } from '@/siteConfig'

export type FaqItem = {
  question: string
  answer: string
}

/**
 * Shared FAQ list. Used on the FAQ page (with FAQPage schema), on the home page
 * teaser, and anywhere else we answer common questions. Editing here updates all
 * of them at once. Answers are plain text so they are safe for JSON-LD.
 */
export const faqs: FaqItem[] = [
  {
    question: 'Where is Juanito’s Tacos located?',
    answer: `You can find us at ${fullAddress}. We are a walk-up street stand serving Urbana, Champaign and the surrounding towns.`,
  },
  {
    question: 'What are your hours?',
    answer: `We are open ${siteConfig.hours.daysDisplay.toLowerCase()}, from ${siteConfig.hours.display} every day. Hours can change with the weather, so a quick call to ${siteConfig.phone} is the surest way to confirm before you head over.`,
  },
  {
    question: 'What is the difference between a taco and a super taco?',
    answer:
      'A regular street taco keeps it simple: your choice of meat with fresh cilantro and onion on a warm corn tortilla. A super taco is loaded up with lettuce, tomato, cheese, onion and sour cream, so it eats more like a full little meal.',
  },
  {
    question: 'What meats can I choose from?',
    answer: `Popular choices include ${siteConfig.meats
      .slice(0, 5)
      .map((m) => m.name)
      .join(', ')} and more. Ask at the stand for the full list of what is fresh that day.`,
  },
  {
    question: 'Do you have vegetarian options?',
    answer:
      'Yes. We can build quesadillas, burritos, nachos and tacos with beans, cheese, rice and fresh toppings instead of meat. Just let us know when you order and we will put something together for you.',
  },
  {
    question: 'Are your tacos gluten-free?',
    answer:
      'Our corn tortillas are naturally corn-based, which many gluten-free guests prefer over flour tortillas. We cook in a small stand where ingredients share space, so if you have celiac disease or a serious allergy, please tell us so we can help you choose carefully.',
  },
  {
    question: 'Do you take cards or is it cash only?',
    answer:
      'PLACEHOLDER: confirm accepted payment methods (cash, card, mobile pay) with the client, then update this answer.',
  },
  {
    question: 'Do you cater parties or events?',
    answer: `We love feeding a crowd. Call us at ${siteConfig.phone} or send an email to ${siteConfig.email} with your date, headcount and location, and we will see what we can do.`,
  },
  {
    question: 'Which towns do you serve?',
    answer: `We are based in ${siteConfig.address.city} and welcome guests from ${siteConfig.serviceArea
      .filter((t) => !t.homeBase)
      .map((t) => t.name)
      .join(', ')} and nearby.`,
  },
]
