'use client'

import { Button } from '@/components/ui/button'

export default function RegisterButton() {
  return (
    <Button
      variant="default"
      size="lg"
      className="lg:m-[unset] lg:ml-auto m-auto bg-sky-600 hover:bg-sky-800 text-white mb-4"
      onClick={() => alert('You can register soon...')}
    >
      Register
    </Button>
  )
}
