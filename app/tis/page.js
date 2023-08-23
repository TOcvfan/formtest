'use client'

import { Button, Box } from '@/lib/mui'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <Box>
      <Button type="button" onClick={() => router.push('/opret/bruger/info1')}>
        Bruger
      </Button>
    </Box>
  )
}