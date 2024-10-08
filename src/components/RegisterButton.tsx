'use client'

import { Button } from '@/components/ui/button'

export default function RegisterButton() {
  return (
    <Button
      variant="default"
      size="lg"
      className="w-20 bg-amber-600 hover:bg-amber-800 text-white mb-4"
      onClick={() => alert('You can register soon...')}
    >
      Register
    </Button>
  )
}
