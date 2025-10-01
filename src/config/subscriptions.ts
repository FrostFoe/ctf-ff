import { PlansRow, SubscriptionPlan } from "types";

export const pricingData: SubscriptionPlan[] = [
  {
    title: "স্টার্টার",
    description: "নতুনদের জন্য",
    benefits: [
      "প্রতি মাসে ১০০টি পর্যন্ত পোস্ট",
      "বেসিক অ্যানালিটিক্স এবং রিপোর্টিং",
      "স্ট্যান্ডার্ড টেমপ্লেটগুলিতে অ্যাক্সেস",
    ],
    limitations: [
      "নতুন বৈশিষ্ট্যগুলিতে অগ্রাধিকার অ্যাক্সেস নেই।",
      "সীমিত গ্রাহক সমর্থন",
      "কোনো কাস্টম ব্র্যান্ডিং নেই",
      "ব্যবসায়িক সংস্থানগুলিতে সীমিত অ্যাক্সেস।",
    ],
    prices: {
      monthly: 0,
      yearly: 0,
    },
    stripeIds: {
      monthly: null,
      yearly: null,
    },
  },
  {
    title: "প্রো",
    description: "অ্যাডভান্সড ফিচার আনলক করুন",
    benefits: [
      "প্রতি মাসে ৫০০টি পর্যন্ত পোস্ট",
      "অ্যাডভান্সড অ্যানালিটিক্স এবং রিপোর্টিং",
      "ব্যবসায়িক টেমপ্লেটগুলিতে অ্যাক্সেস",
      "অগ্রাধিকার গ্রাহক সমর্থন",
      "এক্সক্লুসিভ ওয়েবিনার এবং প্রশিক্ষণ।",
    ],
    limitations: [
      "কোনো কাস্টম ব্র্যান্ডিং নেই",
      "ব্যবসায়িক সংস্থানগুলিতে সীমিত অ্যাক্সেস।",
    ],
    prices: {
      monthly: 15,
      yearly: 144,
    },
    stripeIds: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID!,
      yearly: process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID!,
    },
  },
  {
    title: "বিজনেস",
    description: "পাওয়ার ইউজারদের জন্য",
    benefits: [
      "সীমাহীন পোস্ট",
      "রিয়েল-টাইম অ্যানালিটিক্স এবং রিপোর্টিং",
      "কাস্টম ব্র্যান্ডিংসহ সমস্ত টেমপ্লেটে অ্যাক্সেস",
      "২৪/৭ ব্যবসায়িক গ্রাহক সমর্থন",
      "ব্যক্তিগতকৃত অনবোর্ডিং এবং অ্যাকাউন্ট ম্যানেজমেন্ট।",
    ],
    limitations: [],
    prices: {
      monthly: 30,
      yearly: 300,
    },
    stripeIds: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID!,
      yearly: process.env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID!,
    },
  },
];

export const plansColumns = [
  "starter",
  "pro",
  "business",
  "enterprise",
] as const;

export const comparePlans: PlansRow[] = [
  {
    feature: "অ্যানালিটিক্স-এ অ্যাক্সেস",
    starter: true,
    pro: true,
    business: true,
    enterprise: "কাস্টম",
    tooltip: "পারফরম্যান্স ট্র্যাক করার জন্য সব প্ল্যানে বেসিক অ্যানালিটিক্স অন্তর্ভুক্ত।",
  },
  {
    feature: "কাস্টম ব্র্যান্ডিং",
    starter: null,
    pro: "৫০০/মাস",
    business: "১,৫০০/মাস",
    enterprise: "সীমাহীন",
    tooltip: "কাস্টম ব্র্যান্ডিং প্রো প্ল্যান থেকে শুরু করে পাওয়া যায়।",
  },
  {
    feature: "অগ্রাধিকার সমর্থন",
    starter: null,
    pro: "ইমেল",
    business: "ইমেল ও চ্যাট",
    enterprise: "২৪/৭ সমর্থন",
  },
  {
    feature: "অ্যাডভান্সড রিপোর্টিং",
    starter: null,
    pro: null,
    business: true,
    enterprise: "কাস্টম",
    tooltip:
      "অ্যাডভান্সড রিপোর্টিং বিজনেস এবং এন্টারপ্রাইজ প্ল্যানে পাওয়া যায়।",
  },
  {
    feature: "ডেডিকেটেড ম্যানেজার",
    starter: null,
    pro: null,
    business: null,
    enterprise: true,
    tooltip: "এন্টারপ্রাইজ প্ল্যানে একজন ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার অন্তর্ভুক্ত।",
  },
  {
    feature: "API অ্যাক্সেস",
    starter: "সীমিত",
    pro: "স্ট্যান্ডার্ড",
    business: "উন্নত",
    enterprise: "সম্পূর্ণ",
  },
  {
    feature: "মাসিক ওয়েবিনার",
    starter: false,
    pro: true,
    business: true,
    enterprise: "কাস্টম",
    tooltip: "প্রো এবং উচ্চতর প্ল্যানগুলিতে মাসিক ওয়েবিনারে অ্যাক্সেস অন্তর্ভুক্ত।",
  },
  {
    feature: "কাস্টম ইন্টিগ্রেশন",
    starter: false,
    pro: false,
    business: "উপলব্ধ",
    enterprise: "উপলব্ধ",
    tooltip:
      "কাস্টম ইন্টিগ্রেশন বিজনেস এবং এন্টারপ্রাইজ প্ল্যানে পাওয়া যায়।",
  },
  {
    feature: "ভূমিকা এবং অনুমতি",
    starter: null,
    pro: "বেসিক",
    business: "অ্যাডভান্সড",
    enterprise: "অ্যাডভান্সড",
    tooltip:
      "উচ্চতর প্ল্যানগুলির সাথে ব্যবহারকারীর ভূমিকা এবং অনুমতি পরিচালনা উন্নত হয়।",
  },
  {
    feature: "অনবোর্ডিং সহায়তা",
    starter: false,
    pro: "সেলফ-সার্ভিস",
    business: "সহায়তা সহ",
    enterprise: "সম্পূর্ণ পরিষেবা",
    tooltip: "উচ্চতর প্ল্যানগুলিতে আরও ব্যাপক অনবোর্ডিং সহায়তা অন্তর্ভুক্ত।",
  },
  // Add more rows as needed
];
