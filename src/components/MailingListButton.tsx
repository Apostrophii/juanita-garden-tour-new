'use client'

import { Button } from '@/components/ui/button'

export default function MailingListButton() {
  return (
    <Button
      variant="default"
      size="lg"
      className="lg:m-[unset] lg:ml-auto bg-sky-600 hover:bg-sky-800 text-white mb-4"
      onClick={() => window.open("http://eepurl.com/brFM9T", "_blank")}
    >
      Get Reminders
    </Button>
  )
}
