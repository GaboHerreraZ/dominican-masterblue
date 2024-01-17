import { Email, createContactEmail } from "@/domain/model/email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email: Email = {
      from: "Dominican MasterBlue <info-no-reply@dominicanmasterblue.com>",
      to: ["dominicanmasterblue@gmail.com", body.email],
      subject: "Solicitud de información",
      html: createContactEmail(body),
    };

    const response = await resend.emails.send(email);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
