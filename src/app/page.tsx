import Image from 'next/image'

import WelcomeCard from '@/components/WelcomCard'

export default function Home() {
  return (
    <div className="flex flex-row justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="w-max grow flex md:flex-row-reverse flex-col md:gap-0 gap-12 items-center sm:items-start">
        <Image
          src="/img/background-image.png"
          alt="Garden"
          width={800}
          height={600}
        />
        <WelcomeCard />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  )
}
