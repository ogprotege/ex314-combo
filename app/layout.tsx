import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import Link from "next/link"
import { PrivateAnalytics } from "@/components/analytics/private-analytics"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LiturgicalThemeProvider } from "@/components/liturgical-theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"
import { AuthButtons } from "@/components/auth-buttons"
import { AuthProvider } from "@/context/AuthContext"
import { ChatProvider } from "@/context/ChatContext"
import { ChiRho } from "@/components/chi-rho"
import { AdminLink } from "@/components/admin/AdminLink"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ex314.ai - Catholic Theological AI Assistant",
  description: "A Catholic theological AI assistant providing resources, prayers, and guidance.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <ChatProvider>
        <html lang="en" suppressHydrationWarning>
          <head>
            {/* Google Tag Manager */}
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-W8C4F87P');
              `}
            </Script>
            {/* End Google Tag Manager */}
          </head>
          <body className={inter.className}>
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-W8C4F87P"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
            {/* End Google Tag Manager (noscript) */}

            <ThemeProvider defaultTheme="light" storageKey="ex314-theme">
              <LiturgicalThemeProvider>
                <Suspense fallback={<div>Loading...</div>}>
                  <header className="border-b bg-background sticky top-0 z-50">
                    <div className="container flex h-24 items-center justify-between px-4">
                      <div className="flex items-center gap-6">
                        <Link href="/" className="flex flex-col items-center text-center">
                          <ChiRho className="h-12 w-12 mb-1" />
                          <span className="text-3xl font-bold tracking-tight">Ex314.ai</span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6 text-sm ml-6">
                          <Link href="/prayers" className="transition-colors hover:text-primary">
                            Prayers
                          </Link>
                          <Link href="/calendar" className="transition-colors hover:text-primary">
                            Calendar
                          </Link>
                          <Link href="/rosary" className="transition-colors hover:text-primary">
                            Rosary
                          </Link>
                          <Link href="/about" className="transition-colors hover:text-primary">
                            About
                          </Link>
                          <Link href="/dashboard" className="transition-colors hover:text-primary">
                            Dashboard
                          </Link>
                          <Link href="/chat" className="transition-colors hover:text-primary font-semibold">
                            Chat
                          </Link>
                          <AdminLink />
                        </nav>
                      </div>
                      <AuthButtons />
                    </div>
                  </header>
                  {children}
                  <PrivateAnalytics />
                  <Toaster />
                </Suspense>
              </LiturgicalThemeProvider>
            </ThemeProvider>
          </body>
        </html>
      </ChatProvider>
    </AuthProvider>
  )
}