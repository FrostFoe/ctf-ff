import { SidebarNavItem, SiteConfig } from "types";

const site_url = process.env.NEXT_PUBLIC_APP_URL!;

export const siteConfig: SiteConfig = {
  name: "SaaS স্টার্টার",
  description:
    "Next.js 14, Prisma, Neon, Auth.js v5, Resend, React Email, Shadcn/ui এবং Stripe-এর শক্তি ব্যবহার করে আপনার পরবর্তী বড় জিনিস তৈরি করুন।",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/mickasmt/next-saas-stripe-starter",
  },
  mailSupport: "support@saas-starter.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "কোম্পানি",
    items: [
      { title: "সম্পর্কে", href: "#" },
      { title: "এন্টারপ্রাইজ", href: "#" },
      { title: "শর্তাবলী", href: "/terms" },
      { title: "গোপনীয়তা", href: "/privacy" },
    ],
  },
  {
    title: "প্রোডাক্ট",
    items: [
      { title: "নিরাপত্তা", href: "#" },
      { title: "কাস্টমাইজেশন", href: "#" },
      { title: "গ্রাহক", href: "#" },
      { title: "পরিবর্তনের তালিকা", href: "#" },
    ],
  },
  {
    title: "ডক্স",
    items: [
      { title: "ভূমিকা", href: "#" },
      { title: "ইনস্টলেশন", href: "#" },
      { title: "কম্পোনেন্ট", href: "#" },
      { title: "কোড ব্লক", href: "#" },
    ],
  },
];
