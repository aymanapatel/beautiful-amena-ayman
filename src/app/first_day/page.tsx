"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export default function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-screen rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      
      <div className="flex">
        <div className="z-10 text-5xl md:text-5xl md:leading-tight">🚀</div>
        <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
            You are going to crush it Amena!  
        </h2> 
        <div className="z-10 text-5xl md:text-5xl md:leading-tight">🚀</div>
      </div>

      <h2 className="relative flex-col md:flex-row z-10 text-3xl md: md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-cyan-800 via-cyan-200 to-cyan-950 flex items-center gap-2 md:gap-8">
        <span>Your smarts (street smarts and intellectual), empathy & geniune connection will take you places!</span>
      </h2>
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md: md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-cyan-800 via-cyan-200 to-cyan-950 flex items-center gap-2 md:gap-8">
        <span>Go out there and show how AAMEziNg you are!</span>
      </h2>
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md: md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-cyan-800 via-cyan-200 to-cyan-950 flex items-center gap-2 md:gap-8">
        <span>The world thanks you for being an awesome woman!</span>
      </h2>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
