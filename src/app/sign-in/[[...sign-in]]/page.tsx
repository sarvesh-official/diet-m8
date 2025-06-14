/* eslint-disable @next/next/no-img-element */
"use client"

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="flex md:flex-row flex-col items-center justify-center min-h-screen bg-soft-aqua p-4 md:p-8 gap-48 lg:px-20 relative overflow-hidden">
      {/* Background Waves */}
      {/* <Waves 
        lineColor="rgba(4, 163, 163, 0.25)" 
        backgroundColor="transparent"
        waveSpeedX={0.01} 
        waveSpeedY={0.005}
        waveAmpX={20}
        waveAmpY={15}
        xGap={16}
        yGap={32}
        className="z-0 opacity-70"
      /> */}
      
      {/* Left Column - Brand Info */}
      <div className="flex flex-col items-start justify-center p-6 md:w-1/2 w-full max-w-md md:ml-8 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Image src="/logo-nobg.png" width={60} height={60} alt="Diet M8 logo" className="object-contain" />
          <h1 className="text-4xl font-black text-teal-primary tracking-wide">
            DIET M8
          </h1>
        </div>
        
        <h2 className="text-xl font-semibold uppercase text-teal-primary mb-6 tracking-wide">
          YOUR AI POWERED NUTRITION GUIDE
        </h2>
        
        <p className="text-teal-primary text-md mb-6 max-w-sm leading-relaxed">
          DIET M8: AI-driven meal plans, health-focused
          diet suggestions, and nutrition tracking for better
          well-being.
        </p>
        <div className="border-b-2 border-teal-primary w-16 mb-2"></div>
      </div>      {/* Right Column - Sign In Form */}
      <div className="relative z-10">        
        <SignIn          
        appearance={{
            elements: {
              formButtonPrimary: "bg-teal-primary hover:bg-teal-primary/90 focus:ring-0 focus:outline-none",
              formFieldInput: "border-gray-200 focus:border-teal-primary focus:ring-teal-primary backdrop-blur-sm bg-white/70",
              card: "shadow-none backdrop-blur-md",
              headerTitle: "text-center text-gray-800 font-bold",
              headerSubtitle: "text-center",
              footerActionLink: "text-teal-primary hover:text-teal-primary/90",
              socialButtonsBlockButton: "border border-gray-200 hover:bg-gray-50 backdrop-blur-sm",
              formFieldLabel: "text-gray-700",
              form: "px-4 sm:px-6",
              footer: "px-4 sm:px-6 backdrop-blur-sm",
            },
            layout: {
              socialButtonsPlacement: "bottom"
            }
          }}
        />
      </div>
    </section>
  );
}
