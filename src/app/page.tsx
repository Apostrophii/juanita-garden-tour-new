import Image from 'next/image'
import { ADLaM_Display } from 'next/font/google'

import RegisterButton from '@/components/RegisterButton'
import WelcomeCard from '@/components/WelcomCard'
import MailingListButton from '@/components/MailingListButton'

const ADLaM = ADLaM_Display({
  variable: "--font-adlam",
  weight: ["400"],
  subsets: ["adlam"],
})

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 sm:p-20">
      <nav className="flex w-full gap-4 justify-center">
        <RegisterButton />
        <MailingListButton />
      </nav>
      <h1 className={`${ADLaM.className} text-4xl md:text-6xl font-bold text-center md:text-left md:mb-20 mb-5`}>
        juanita garden tour
      </h1>
      <main className="flex flex-col items-center">
        <div
          id="landing-contents"
          className="w-full flex-1 flex lg:flex-row-reverse flex-col lg:gap-0 lg:items-start gap-6 items-center justify-center"
        >
          <Image
            className="w-[100vw] lg:max-w-[50%] max-w-[unset] lg:rounded-md"
            src="/img/background-image.png"
            alt="Garden"
            width={800}
            height={600}
          />
          <h2 className="text-lg self-start px-4">
            You&apos;re Invited!
          </h2>
          <p className="self-start px-4">
            We are highlighting North Kirkland's beautiful gardens for the first time in over 10 years.
          </p>
          <p className="self-start px-4">
            Money raised will go toward scholarships for Juanita High School students so come out and show them your support!
          </p>
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
