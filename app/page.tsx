"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  
  // Set isClient to true once component is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Ex314.ai</h1>
      <p className="text-xl mb-8 max-w-2xl text-center">
        Catholic Theological Platform - A.I., Sanctified.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => router.push("/sign-in")}
        >
          Try Ex314.ai
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
    </main>
  )
}