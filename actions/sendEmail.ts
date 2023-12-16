"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  const senderEmail = FormData.get("senderEmail");
  const message = FormData.get("senderMessage");

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }

  resend.emails.send({
    from: "onboarding@codebyarthur.com",
    to: "codebyarthur@gmail.com",
    subject: "New message from contact form",
    reply_to: senderEmail,
    text: message,
  });
};
