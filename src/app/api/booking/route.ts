// src/app/api/booking/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Ici, tu peux :
  // 1. Envoyer un mail avec Resend
  // 2. Enregistrer dans une DB (Supabase/Prisma)
  // 3. Envoyer une notification Slack/Discord
  
  console.log("Nouveau RDV reçu :", body);

  return NextResponse.json({ message: "Succès" }, { status: 200 });
}