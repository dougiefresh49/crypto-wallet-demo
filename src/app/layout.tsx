import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });
const title = 'Crypto Wallet Demo';
const description =
  'Fetch and display all cryptocurrency balances in a given wallet';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: '/public/images/og-image.png',
        width: 1280,
        height: 640,
        alt: 'Crypto Wallet Demo',
      },
    ],
  },
  twitter: {
    title,
    description,
    images: [
      {
        url: '/public/images/og-image.png',
        width: 1280,
        height: 640,
        alt: 'Crypto Wallet Demo',
      },
    ],
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
