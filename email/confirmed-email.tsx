import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Text,
    Img
  } from '@react-email/components';
  import * as React from 'react';
  
  interface ConfirmedProps {
    customerName: string;
    bookTitle: string;
    downloadLink: string;
    imgUrl:string;
  }
  
  export const ConfirmedEmail = ({
    customerName = 'Valued Customer',
    bookTitle = 'Our Amazing E-book',
    downloadLink = '#',
    imgUrl
  }: ConfirmedProps) => (
    <Html>
      <Head />
      <Preview>Your e-book purchase confirmation 🥳</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank you for your purchase!</Heading>
          <Text style={text}>
            Dear {customerName},
          </Text>
          <Text style={text}>
          {`  We're excited to confirm that your purchase of "${bookTitle}" has been successful. Your e-book is attached to this email as a PDF file.`}
          </Text>
          <Text style={text}>
            You can also download your e-book 📑 using the link below 👇.
          </Text>
          {/* <Img src={imgUrl} width={200}
          height={400}  /> */}
          <Link href={downloadLink} style={button}>
            Download Your E-book
          </Link>
          <Text style={text}>
            {`We hope you enjoy reading your new e-book. If you have any questions or need assistance, please don't hesitate to contact our support team.`}
          </Text>
          <Text style={text}>
            Happy reading!
          </Text>
          <Text style={text}>
            Best regards,<br />
            Your eboibd team.
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default ConfirmedEmail;
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
  };
  
  const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    padding: '17px 0 0',
    margin: '0',
  };
  
  const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '26px',
  };
  
  const button = {
    backgroundColor: '#007bff',
    borderRadius: '4px',
    color: '#ffffff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    padding: '12px 16px',
    margin: '20px auto',
    width: '220px',
  };
  
  