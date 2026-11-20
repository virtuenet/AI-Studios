import './globals.css';
import { Inter } from "next/font/google";
import { headers } from 'next/headers';
import { getLocaleConfig } from '@/lib/locales';
import ServiceWorkerUpdater from '@/components/ServiceWorkerUpdater';
import WebVitals from '@/components/WebVitals';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: 'AI Studios — Free AI Image & Video Studio',
  description: 'Generate AI images and videos using 200+ models — Flux, Midjourney, Kling, Veo, Seedance and more.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'AI Studios',
  },
};

export const viewport = {
  themeColor: '#22d3ee',
};

export default async function RootLayout({ children }) {
  // Locale is derived from the URL path by middleware.js and passed
  // through as a plain response header — the root layout is shared by
  // every locale's route tree, so it can't take a `locale` prop directly.
  const headerList = await headers();
  const { htmlLang } = getLocaleConfig(headerList.get('x-locale'));

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.muapi.ai" />
        <link rel="dns-prefetch" href="https://cdn.muapi.ai" />
        <link rel="dns-prefetch" href="https://api.muapi.ai" />
        {/* Apply the saved theme before first paint to avoid a dark flash. */}
        <script dangerouslySetInnerHTML={{ __html: "try{if(localStorage.getItem('theme')==='light')document.documentElement.setAttribute('data-theme','light')}catch(e){}" }} />
      </head>
      <body className={inter.variable}>{children}
        <ServiceWorkerUpdater />
        <WebVitals />
      </body>
    </html>
  );
}
