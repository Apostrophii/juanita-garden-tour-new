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
      <header className="fixed left-1/2 -translate-x-2/4">
        <div className="flex flex-col items-center justify-center w-screen p-8 bg-gradient-to-b from-white from-95%">
          <nav className="flex w-full gap-4 content-between justify-center">
            <MailingListButton />
            <RegisterButton />
          </nav>
          <h1 className={`${ADLaM.className} text-3xl md:text-6xl font-bold text-center md:text-left md:mb-10`}>
            juanita garden tour
          </h1>
        </div>
        <Image
          className="fixed"
          style={fadeInAnimationStyles}
          src="/img/SeattleMap.svg"
          alt="Seattle Map"
          width={800}
          height={600}
        />
        <Image
          className="fixed"
          style={zoomAndEnhanceAnimationSyles}
          src="/img/JuanitaMap.svg"
          alt="Juanita Map"
          width={800}
          height={600}
        />
      </header>
      <main className="flex flex-col items-center">
        <Image
          className="w-screen mt-40"
          src="/img/background-image.png"
          alt="Garden"
          width={800}
          height={600}
        />
        <WelcomeCard />
        {/* <div
          id="landing-container"
          className="w-full flex flex-col items-center justify-center"
        >
          <IntroText />
          <div
            id="landing-contents"
            className="w-full flex-1 flex lg:flex-row-reverse flex-col lg:items-start items-center justify-center"
          >
            <Image
              className="w-[100vw] lg:max-w-[50%] max-w-[unset] lg:rounded-md lg:h-[50vh]"
              src="/img/background-image.png"
              alt="Garden"
              width={800}
              height={600}
            />
            <WelcomeCard />
          </div>
        </div>
        <div
          id="map-contents"
        > */}
        {/* </div> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  )
}
