'use client'

import { Button } from '@/components/ui/button'

export default function RegisterButton() {
  return (
    <Button
      variant="default"
      size="lg"
      className="w-20 bg-[#f68623] hover:bg-[#d16609] text-white mb-4"
      onClick={() => alert('Coming soon!')}
    >
      Register
    </Button>
  )
}
