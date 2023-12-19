import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormProps = {
  message: string;
  senderEmail: string;
};

export default function ContactForm({
  message,
  senderEmail,
}: ContactFormProps) {
  return (
    <Html>
      <Head />
      <Preview>New message</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 rounded-md">
              <Heading className="leading-tight">Subject</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Sent from: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
