import React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Tailwind } from '@react-email/components';

const EmailTemplate = ({ senderEmail, message }) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission</Preview>
    <Tailwind>
      <Body className="bg-white font-sans">
        <Container className="mx-auto p-4 border border-gray-200 rounded-md">
          <Heading className="text-xl font-bold mb-4">New Contact Form Submission</Heading>
          <Text className="mb-2"><strong>From:</strong> {senderEmail}</Text>
          <Text className="mb-4"><strong>Message:</strong></Text>
          <Text className="whitespace-pre-wrap">{message}</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;
