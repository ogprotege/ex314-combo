"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'
import { ChiRho } from "@/components/chi-rho"

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
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center mb-6">
        <ChiRho className="h-28 w-28 mb-4" />
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-center">Ex314.ai</h1>
      </div>
      <p className="text-xl mb-10 max-w-2xl text-center">
        Catholic Theological Platform - A.I., Sanctified.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
          onClick={() => router.push("/sign-in")}
        >
          Try Ex314.ai
        </Button>
        <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
    </main>
  )
}