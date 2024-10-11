'use client';

import Image from 'next/image'
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

  const commonAnimationStyles = {
    'animation-play-state': 'paused',
    'animation-delay': 'calc(var(--scroll) * -1s)',
    'animation-iteration-count': '1',
    'animation-fill-mode': 'both',
  }

  const fadeInAnimationStyles = {
    animation: 'fade-in 1s linear infinite',
    ...commonAnimationStyles,
  }

  const zoomAndEnhanceAnimationSyles = {
    animation: 'zoom-and-enhance 1s linear infinite',
    ...commonAnimationStyles,
  };

  return (
    <div className="min-h-[200vh]">
      <header className="fixed left-1/2 -translate-x-2/4 z-10">
        <div className="flex flex-col items-center justify-center w-screen p-8 bg-gradient-to-b from-white from-95%">
          <nav className="flex w-full gap-4 content-between justify-center">
            <MailingListButton />
            <RegisterButton />
          </nav>
          <h1 className={`${ADLaM.className} text-3xl md:text-6xl font-bold text-center md:text-left md:mb-10`}>
            juanita garden tour
          </h1>
          <h2 className={`${ADLaM.className} text-2xl md:text-6xl font-bold text-center md:text-left md:mb-10`}>
            june 7th • 2023
          </h2>
        </div>
      </header>
      <main className="flex flex-col items-center">
        <div className="h-[90vh]">
          <div className="sticky flex items-center h-[20rem] top-[calc(50vh-10rem)] w-screen p-4 box-border bg-[#4db047] bg-opacity-50">
            <IntroText />
          </div>
        </div>
        <div className="h-[60vh]">
          <Image
            className="sticky top-[30vh] h-[40vh] object-cover"
            src="/img/background-image.png"
            alt="Garden"
            width={800}
            height={600}
          />
        </div>
        <div className="h-[55vh]">
          <div className="sticky top-[30vh] w-screen">
            <WelcomeCard />
          </div>
        </div>
        <div className="h-[120vh]">
          <div className="sticky top-[calc(50vh-50vw*(11/16))] w-screen">
          <div className="relative">
          <Image
            className=""
            style={fadeInAnimationStyles}
            src="/img/SeattleMap.svg"
            alt="Seattle Map"
            width={800}
            height={600}
          />
          <Image
            className="absolute top-0"
            style={zoomAndEnhanceAnimationSyles}
            src="/img/JuanitaMap.svg"
            alt="Juanita Map"
            width={800}
            height={600}
          />
          </div>
          </div>
        </div>
        {/* <div className="h-dvh"></div> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  )
}
