'use client'

import { Button } from '@/components/ui/button'

export default function MailingListButton() {
  return (
    <Button
      variant="default"
      size="lg"
      className="w-20 bg-sky-600 hover:bg-sky-800 text-white mb-4"
      onClick={() => window.open("http://eepurl.com/brFM9T", "_blank")}
    >
      Get Reminders
    </Button>
  )
}
