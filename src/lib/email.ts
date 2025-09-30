import { MagicLinkEmail } from "@/emails/magic-link-email";
import { EmailConfig } from "next-auth/providers/email";

import { siteConfig } from "@/config/site";

import { getUserByEmail } from "./user";

export const sendVerificationRequest: EmailConfig["sendVerificationRequest"] =
  async ({ identifier, url, provider }) => {
    console.log("Email functionality is disabled.");
    console.log("Verification URL:", url);
    
    // In a real scenario without email, you might want to log the verification URL
    // to the console during development for easier testing.
    
    // For now, we'll just prevent any email from being sent.
    
    if (process.env.NODE_ENV === "development") {
      console.log(`Login link for ${identifier}: ${url}`);
    }
  };
