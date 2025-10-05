import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from 'next-intl';
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AnimeHub",
    description: "For anime and manga fans.",
};

export default async function RootLayout({children }: { children: React.ReactNode }) {

  return (
    <html>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <NextIntlClientProvider>
                <ConvexClientProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </ConvexClientProvider>
            </NextIntlClientProvider>
        </body>
    </html>
  );
}