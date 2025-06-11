"use client"

import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function AuthButtons() {
  const authState = useAuth()
  const isAuthenticated = authState.isAuthenticated
  const user = 'user' in authState ? authState.user : null
  const logout = 'logout' in authState ? authState.logout : () => {}

  return (
    <div className="flex items-center gap-4">
      {!isAuthenticated ? (
        <>
          <Link href="/sign-in">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
              Sign Up
            </Button>
          </Link>
        </>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.picture || ""} alt={user?.name || ""} />
                <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="/profile" className="w-full">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dashboard" className="w-full">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={logout}>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}