import { SidebarProvider } from '@/context/SidebarContext';
import DashboardLayout from '@/layout/DashboardLayout';
import { Urbanist } from 'next/font/google';
import React from 'react'

const urbanist = Urbanist({
  weight: ["200","400","500","600","800","900","300","100"], 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-urbanist',
});

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`min-h-screen ${urbanist.variable} font-urbanist bg-soft-aqua`}>
            <SidebarProvider>
                <DashboardLayout>
                {children}
                </DashboardLayout>
            </SidebarProvider>
        </div>
    );
}

