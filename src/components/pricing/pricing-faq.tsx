import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HeaderSection } from "../shared/header-section";

const pricingFaqData = [
  {
    id: "item-1",
    question: "বিনামূল্যে প্ল্যানের খরচ কত?",
    answer:
      "আমাদের বিনামূল্যে প্ল্যান সম্পূর্ণ বিনামূল্যে, কোনো মাসিক বা বার্ষিক চার্জ ছাড়াই। এটি শুরু করার এবং আমাদের বেসিক বৈশিষ্ট্যগুলি অন্বেষণ করার একটি দুর্দান্ত উপায়।",
  },
  {
    id: "item-2",
    question: "বেসিক মাসিক প্ল্যানের খরচ কত?",
    answer:
      "বেসিক মাসিক প্ল্যানের মূল্য প্রতি মাসে $15। এটি আমাদের মূল বৈশিষ্ট্যগুলিতে অ্যাক্সেস সরবরাহ করে এবং মাসিক ভিত্তিতে বিল করা হয়।",
  },
  {
    id: "item-3",
    question: "প্রো মাসিক প্ল্যানের মূল্য কত?",
    answer:
      "প্রো মাসিক প্ল্যান প্রতি মাসে $25 এর জন্য উপলব্ধ। এটি উন্নত বৈশিষ্ট্য সরবরাহ করে এবং অতিরিক্ত নমনীয়তার জন্য মাসিক ভিত্তিতে বিল করা হয়।",
  },
  {
    id: "item-4",
    question: "আপনারা কি কোনো বার্ষিক সাবস্ক্রিপশন প্ল্যান অফার করেন?",
    answer:
      "হ্যাঁ, আমরা আরও বেশি সঞ্চয়ের জন্য বার্ষিক সাবস্ক্রিপশন প্ল্যান অফার করি। বেসিক বার্ষিক প্ল্যান প্রতি বছর $144, এবং প্রো বার্ষিক প্ল্যান প্রতি বছর $300।",
  },
  {
    id: "item-5",
    question: "পেইড প্ল্যানগুলির জন্য কি কোনো ট্রায়াল পিরিয়ড আছে?",
    answer:
      "আমরা প্রো মাসিক এবং প্রো বার্ষিক উভয় প্ল্যানের জন্য ১৪ দিনের বিনামূল্যে ট্রায়াল অফার করি। একটি পেইড সাবস্ক্রিপশনে প্রতিশ্রুতিবদ্ধ হওয়ার আগে সমস্ত বৈশিষ্ট্য अनुभव করার এটি একটি দুর্দান্ত উপায়।",
  },
];

export function PricingFaq() {
  return (
    <section className="container max-w-4xl py-2">
      <HeaderSection
        label="FAQ"
        title="সচরাচর জিজ্ঞাস্য"
        subtitle="সাধারণ জিজ্ঞাসার দ্রুত উত্তর খুঁজে পেতে আমাদের व्यापक FAQ অন্বেষণ করুন। আপনার যদি আরও সহায়তার প্রয়োজন হয়, ব্যক্তিগতকৃত সাহায্যের জন্য আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না।"
      />

      <Accordion type="single" collapsible className="my-12 w-full">
        {pricingFaqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground sm:text-[15px]">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
