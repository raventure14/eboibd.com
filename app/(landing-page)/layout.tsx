
import type { Metadata } from 'next';
import Footer from '@/components/footer';
import { Navbar } from '@/components/navigation/navbar';
import Cart from '@/components/cart';



export const metadata: Metadata = {
  title: 'RA Venture 1',
  description: 'RA Venture best e-book selling plafrorm',
  icons:{
    icon:"/favicon.ico"
  }
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='relative overflow-hidden'>
        <Navbar />
        <Cart/>
        {children}
        <Footer />
      </body>
    </html>
  );
}