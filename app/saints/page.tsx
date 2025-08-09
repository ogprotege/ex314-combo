import { Metadata } from "next";
import Link from "next/link";
import { ChiRho } from "@/components/chi-rho";
import SaintsClient from "./saints-client";

export const metadata: Metadata = {
  title: "Saints Directory - Ex314.ai",
  description: "Explore the lives, teachings, and legacy of Catholic saints.",
};

// Fetch initial saints data (SSR for SEO)
async function getInitialSaints() {
  try {
    // In production, use the actual API endpoint
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/saints?limit=30&page=1`, {
      cache: 'no-store', // Always fetch fresh data on server
    });
    
    if (!response.ok) {
      console.error('Failed to fetch initial saints');
      return [];
    }
    
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching initial saints:', error);
    return [];
  }
}

export default async function SaintsDirectoryPage() {
  const initialSaints = await getInitialSaints();
  
  return (
    <main className="min-h-screen bg-white">
      <header className="w-full py-4 md:py-6 px-4 md:px-8 flex justify-between items-center border-b sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <ChiRho className="h-6 w-6 md:h-8 md:w-8" />
            <h1 className="text-xl md:text-2xl font-bold">Ex314.ai</h1>
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <Link href="/resources" className="text-sm font-medium hover:underline">
            Resources
          </Link>
          <Link href="/calendar" className="text-sm font-medium hover:underline">
            Liturgical Calendar
          </Link>
          <Link href="/prayers" className="text-sm font-medium hover:underline">
            Prayers
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
        </nav>
      </header>

      <SaintsClient initialSaints={initialSaints} />
      
      <footer className="bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <ChiRho className="h-6 w-6 mr-2" />
            <span className="text-gray-700">© 2024 Ex314.ai - All rights reserved</span>
          </div>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}