
import type { Metadata } from 'next';
import Footer from '@/components/footer';
import { Navbar } from '@/components/navigation/navbar';
import Cart from '@/components/cart';
import { ScrollButton } from '@/components/scroll-button';
import MobileNav from '@/components/navigation/mobile-nav';



export const metadata: Metadata = {
  title: 'E-boi is best e-book selling platform in Bangladesh',
  description: 'e-boi is  best e-book selling plafrorm',
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
        <MobileNav />
        <Cart/>
        {children}
        <Footer />
        <ScrollButton />
      </body>
    </html>
  );
}