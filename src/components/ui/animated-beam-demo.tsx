"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { FileText, FileStack, Bot, Zap, MessageCircle, MessageSquare, FilePlus, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import BotTableRobot from '@/assets/bot-table-robot.svg?react';

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

// Add the correct brand robot SVG as a React component
const BrandRobotIcon = () => (
  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 402 517" className="w-10 h-10">
    <path d="M0,0h402v516.558c-.19.109-.35.215-.556.285-1.558.527-17.888.157-20.668.157l-62.847.004-312.369-.004c-1.604,0-4.178.347-5.56-.442V0Z" fill="#fefefe"/>
    <path d="M117.763,230.991c3.517-11.095,8.874-21.523,19.735-27.088l.215-.108-.149-.126.445-.118c-.35-.307-.652-.446-1.069-.631-1.15-.512-1.888-1.337-2.325-2.517-1.168-3.158-.527-23.975-.631-29.232-.188-9.415-1.255-18.949-1.991-28.339-.861-10.984-1.456-21.999-2.222-32.991l-1.202-15.568c-.277-3.567-.778-7.392-.424-10.961.093-.934.405-1.864.819-2.704,1.211-2.46,3.058-3.797,5.636-4.62,4.107-1.311,8.919-1.462,13.206-1.808,7.597-.613,15.133-1.032,22.748-1.248,6.098-.173,12.183-.671,18.281-.778,19.473-.369,38.953.143,58.38,1.533,5.709.384,16.627.357,21.522,2.988,2.149,1.155,3.557,3.087,4.222,5.417,1.052,3.687-.349,19.607-.652,24.489-.657,11.855-1.434,23.703-2.33,35.542-.724,9.683-1.658,19.408-1.994,29.112-.193,5.547,1.021,25.494-1.065,29.085-.73,1.256-1.835,2.254-2.897,3.227,9.949,5.442,16.849,15.094,19.983,25.852l.176.616c5.143-.094,10.244.014,14.196,3.809,3.832,3.68,4.487,8.502,4.536,13.552l.018,15.043c.014,4.511.547,9.638-.54,14.031-.6,2.427-1.78,4.667-3.533,6.461-3.749,3.838-8.377,4.136-13.438,4.145h-.321c-.02,3.374.639,11.246-.205,14.165-.437,1.51-1.476,2.822-2.582,3.906-7.715,7.557-19.345,11.014-29.364,14.174,2.882,3.927,6.828,3.788,11.151,5.334,5.049,1.805,10.305,4.116,14.887,6.92,1.665,1.019,3.14,2.425,4.841,3.358,3.286,1.802,7.094,2.1,10.315,4.228,11.631,7.682,16.609,24.959,19.191,37.855,1.772,8.853,2.484,17.718,2.745,26.723.064,2.209.329,4.702.039,6.884-.043.322-.121.577-.223.884-.092,3.64,3.492,6.047,2.652,10.718-.912,5.07-4.928,9.118-8.995,11.938-8.978,6.225-20.213,9.746-30.689,12.446-25.969,6.692-52.536,8.473-79.253,8.446-5.596-.006-11.224.086-16.816-.113-14.484-.513-30.327-2.11-44.606-4.681-15.686-2.824-44.076-8.55-53.72-22.653-4.222-6.173-2.157-12.295,2.263-17.664.613-.745,2.305-2.315,2.42-3.227.014-.114.019-.23.028-.344-1.238-.637-2.596-2.201-3.065-3.504-.453-4.683.52-9.77,1.43-14.354,3.101-15.627,8.791-32.129,19.07-44.56,7.89-9.541,18.718-17.445,31.377-18.669,2.291-.222,4.579-.192,6.876-.131.66-2.457,1.128-4.862,1.277-7.407-8.328-2.234-23.939-7.557-28.802-15.048-.741-4.969-.234-10.574-.203-15.615-5.033-.04-10.224-.048-14.028-3.872-1.843-1.853-3.077-4.266-3.638-6.808-.874-3.959-.378-8.761-.345-12.82l.115-17.801c.052-4.115.78-8.367,3.83-11.379,3.405-3.363,7.45-3.518,11.971-3.448l2.721.053Z" fill="#232629"/>
  </svg>
);

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Phone className="w-8 h-8 text-primary" />
          </Circle>
          <Circle ref={div5Ref}>
            <Phone className="w-8 h-8 text-primary" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Phone className="w-8 h-8 text-primary" />
          </Circle>
          <Circle ref={div6Ref}>
            <Phone className="w-8 h-8 text-primary" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Phone className="w-8 h-8 text-primary" />
          </Circle>
          <Circle ref={div7Ref}>
            <Phone className="w-8 h-8 text-primary" />
          </Circle>
        </div>
      </div>
      {/* Absolutely center the main circle over the lines */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
        <Circle ref={div4Ref} className="size-[147px]">
          <BotTableRobot className="w-28 h-28" />
        </Circle>
      </div>

      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div1Ref as React.RefObject<HTMLElement>}
        toRef={div4Ref as React.RefObject<HTMLElement>}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div2Ref as React.RefObject<HTMLElement>}
        toRef={div4Ref as React.RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div3Ref as React.RefObject<HTMLElement>}
        toRef={div4Ref as React.RefObject<HTMLElement>}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div5Ref as React.RefObject<HTMLElement>}
        toRef={div4Ref as React.RefObject<HTMLElement>}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div6Ref as React.RefObject<HTMLElement>}
        toRef={div4Ref as React.RefObject<HTMLElement>}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div7Ref as React.RefObject<HTMLElement>}
        toRef={div4Ref as React.RefObject<HTMLElement>}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
} 