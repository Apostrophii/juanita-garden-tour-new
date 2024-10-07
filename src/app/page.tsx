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
    <div className="flex flex-col items-center justify-center p-8 sm:p-20">
      <h1 className={`${ADLaM.className} text-4xl md:text-6xl font-bold text-center md:text-left mb-8`}>
        juanita garden tour
      </h1>
      <main className="w-full flex-1 flex md:flex-row-reverse flex-col md:gap-0 gap-12 items-center justify-center sm:items-start">
        <Image
          className="w-[140vw] max-w-[unset] rounded-md"
          src="/img/background-image.png"
          alt="Garden"
          width={800}
          height={600}
        />
        <WelcomeCard />
        <Image
          className="rounded-md"
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
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  )
}
