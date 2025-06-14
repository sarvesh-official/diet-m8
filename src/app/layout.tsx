import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Toaster } from "sonner";
import { Fira_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: "DIET M8 - AI Powered Nutrition Guide",
  description: "Get personalized meal plans, nutrition guidance, and symptom-based health advice with DIET M8's AI-powered platform.",
  icons: [
    "/logo.png"
  ]
};

const inter = Fira_Sans({
  weight: ["200","400","500","600","800","900","300","100"], subsets : ["latin"]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider>
              {children}
            <Toaster/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
