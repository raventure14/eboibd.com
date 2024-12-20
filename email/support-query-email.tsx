import React from 'react';
import { Html, Head, Body, Container, Section, Text, Hr } from '@react-email/components';
import { render } from '@react-email/render';

interface SupportQueryEmailProps {
  email: string;
  query: string;
  phone?: string;
}

export const SupportQueryEmail: React.FC<SupportQueryEmailProps> = ({ email, query, phone }) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text style={paragraph}>New support query received:</Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={paragraph}>
              <strong>Query:</strong> {query}
            </Text>
            {phone && (
              <Text style={paragraph}>
                <strong>Phone Number:</strong> {phone}
              </Text>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main: React.CSSProperties = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container: React.CSSProperties = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box: React.CSSProperties = {
  padding: '0 48px',
};

const hr: React.CSSProperties = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph: React.CSSProperties = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left',
};

// // Example usage
// const emailHtml = render(
//   <SupportQueryEmail 
//     email="user@example.com" 
//     query="I'm having trouble logging into my account. Can you help?" 
//     phoneNumber="123-456-7890" 
//   />
// );

// console.log(emailHtml);