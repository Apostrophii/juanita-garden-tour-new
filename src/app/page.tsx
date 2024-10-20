'use client';

import { ADLaM_Display } from 'next/font/google'

import MailingListButton from '@/components/MailingListButton'
import RegisterButton from '@/components/RegisterButton'
import IntroText from '@/components/IntroText'
import WelcomeCard from '@/components/WelcomCard'
import React, { useEffect, useState } from 'react';

const ADLaM = ADLaM_Display({
  variable: "--font-adlam",
  weight: ["400"],
  subsets: ["adlam"],
})

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY / (document.body.offsetHeight - window.innerHeight));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    document.body.style.setProperty('--scroll', scrollPosition.toString());
  }, [scrollPosition]);

  const scrollAnimationStyles = {
    'animation-play-state': 'paused',
    'animation-delay': 'calc(var(--scroll) * -1s)',
    'animation-iteration-count': '1',
    'animation-fill-mode': 'both',
  }

  const zoomAndEnhanceAnimationSyles = {
    animation: 'zoom-and-enhance 1s linear infinite',
    ...scrollAnimationStyles,
  };

  const fadeOutAnimationSyles = {
    animation: 'fade-out 1s linear infinite',
    ...scrollAnimationStyles,
  }

  const smallBounceAnimationSyles = {
    animation: 'small-bounce 800ms 500ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-[40rem]">
        <header className="fixed left-1/2 -translate-x-2/4 z-10">
          <div className="flex flex-col items-center justify-center w-screen p-8 squat:p-4 bg-gradient-to-b from-white from-95%">
            <nav className="flex w-full gap-4 content-between justify-center">
              <MailingListButton />
              <RegisterButton />
            </nav>
            <h1 className={`${ADLaM.className} text-3xl md:text-6xl squat:text-4xl font-bold md:mb-4 md:mt-2 squat:mb-1 squat:mt-0`}>
              juanita garden tour
            </h1>
            <h2 className={`${ADLaM.className} text-2xl md:text-4xl squat:text-2xl font-bold md:mb-2 squat:mb-0`}>
              june 7th • 2025
            </h2>
          </div>
        </header>
        <main className="flex flex-col items-center">
          <div className="h-[95vh] squat:h-[100vh] mobile-landscape:mt-48">
            <div className="sticky flex items-center h-[20rem] squat:h-[16rem] top-[calc(50vh+3rem-10rem)] md:top-[calc(50vh-10rem)] squat:top-[calc(50vh+5rem-8rem)] p-4 box-border bg-[#4db047] bg-opacity-50">
              <IntroText />
            </div>
          </div>
          <div className="h-[calc(100vh-12rem)] md:h-[calc(100vh-16rem)] squat:h-[calc(100vh-10rem)]">
            <img
              className="sticky top-[calc(50vh+3rem-20vh)] md:top-[calc(50vh-200px)] squat:top-[calc(50vh+5rem-100px)] h-[40vh] object-cover"
              src="/img/background-image.png"
              alt="Garden"
              width={800}
              height={600}
            />
          </div>
          <div className="h-[calc(100vh-12rem)] md:h-[calc(100vh-16rem)] squat:h-[calc(110vh-10rem)]">
            <div className="sticky top-[calc(50vh+4.5rem-0.5*min(65vh,26.5rem))] md:top-[calc(50vh-0.5*min(65vh,26.5rem))] squat:top-[calc(50vh+5rem-0.5*min(65vh,26.5rem))] max-w-[100vw]">
              <WelcomeCard />
            </div>
          </div>
          <div className="h-[calc(160vh-12rem)] md:h-[calc(160vh-16rem)] squat:h-[calc(220vh-10rem)]">
            <div className="sticky top-[calc(50vh+1rem-50vw*(11/16))] md:top-[calc(50vh-220px)] squat:md:top-[calc(50vh+5rem-210px)] w-full">
              <div className="relative">
                <img
                  className=""
                  src="/img/SeattleMap.svg"
                  alt="Seattle Map"
                  width={800}
                  height={600}
                />
                <img
                  className="absolute top-0"
                  style={zoomAndEnhanceAnimationSyles}
                  src="/img/JuanitaMapMinimal.svg"
                  alt="Juanita Map"
                  width={800}
                  height={600}
                />
              </div>
              <p className="px-8 py-2">
                Gardens in the tour will be within the boundaries served by Juanita High School (the area shaded tan). Juanita High School is the purple square.
              </p>
            </div>
          </div>
          <div className="pt-8 pb-4">
            <div className="flex flex-col gap-4">
              <div className="flex justify-center items-center gap-4">
                <img
                  className=""
                  src="/img/Flower.svg"
                  alt="Flower"
                  width={60}
                  height={60}
                />
                <img
                  className={`${ADLaM.className} h-[59.427px]`}
                  src="/img/JNA.png"
                  alt="Juanita Neighborhoods Association Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <p><b>Phone:</b> 707.797.7499</p>
                <p><b>Email:</b> <a href="mailto:info@juanitagardentour.org" className="underline">info@juanitagardentour.org</a></p>
              </div>
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
        <div className="" style={fadeOutAnimationSyles}>
          <div className="fixed left-[calc(50%-1rem)] bottom-4 text-white bg-[#01a9de] w-8 h-8 flex items-center justify-center pointer-events-none rounded-full opacity-0 -translate-y-12" style={smallBounceAnimationSyles}>
            ↓
          </div>
        </div>
      </div>
    </div>
  )
}
