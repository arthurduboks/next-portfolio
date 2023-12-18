"use server";

import { Resend } from "resend";
import { validateStr } from "@/lib/utils";
import { getErrorMsg } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  const senderEmail = FormData.get("senderEmail");
  const senderMessage = FormData.get("senderMessage");

  if (!validateStr(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateStr(senderMessage, 1000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@codebyarthur.com>",
      to: "codebyarthur@gmail.com",
      subject: "New message",
      reply_to: senderEmail as string,
      text: senderMessage as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMsg(error),
    };
  }
};
