import Image from 'next/image'
import { ADLaM_Display } from 'next/font/google'

import WelcomeCard from '@/components/WelcomCard'

const ADLaM = ADLaM_Display({
  variable: "--font-adlam",
  weight: ["400"],
  subsets: ["adlam"],
})

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 sm:p-20">
      <h1 className={`${ADLaM.className} text-4xl md:text-6xl font-bold text-center md:text-left md:mb-20 mb-5`}>
        juanita garden tour • spring &apos;25
      </h1>
      <main className="flex flex-col items-center">
        <div
          id="landing-contents"
          className="w-full flex-1 flex lg:flex-row-reverse flex-col lg:gap-0 lg:items-start gap-6 items-center justify-center"
        >
          <Image
            className="w-[100vw] lg:max-w-[50%] max-w-[unset] rounded-md"
            src="/img/background-image.png"
            alt="Garden"
            width={800}
            height={600}
          />
          <WelcomeCard />
        </div>
        <div
          id="map-contents"
        >
          <Image
            className="rounded-md my-4"
            src="/img/SeattleMap.png"
            alt="Seattle Map"
            width={800}
            height={600}
          />
          <Image
            className="rounded-md"
            src="/img/JuanitaMap.png"
            alt="Juanita Map"
            width={800}
            height={600}
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  )
}
