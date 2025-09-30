import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return NextResponse.json({ message: "Stripe webhook is disabled." }, { status: 200 });
}
