import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EparionaD',
  description: 'Portafolio hecho por EparionaD',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es-PE'>
      <body className={urbanist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
