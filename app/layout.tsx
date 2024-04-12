import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import NavBar from '@/components/NavBar.jsx';
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <AppRouterCacheProvider>
        <main className="min-h-screen flex flex-col items-center">
          <NavBar />
          {children}
        </main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
