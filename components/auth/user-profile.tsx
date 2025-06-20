"use client"

import { useAuth } from "@/hooks/use-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export const UserProfile = () => {
  const authState = useAuth()
  const isLoading = authState.isLoading
  const user = 'user' in authState ? authState.user : null
  const logout = 'logout' in authState ? authState.logout : () => {}

  if (isLoading || !user) {
    return null
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col">
        <span className="text-sm font-medium">{user.name}</span>
        <span className="text-xs text-gray-500">{user.email}</span>
      </div>
      <Avatar>
        <AvatarImage src={user.picture || "/placeholder.svg"} alt={user.name || "User"} />
        <AvatarFallback>
          {user.name
            ?.split(" ")
            .map((n: string) => n[0])
            .join("") || "U"}
        </AvatarFallback>
      </Avatar>
      <Button onClick={logout} variant="outline">
        Log Out
      </Button>
    </div>
  )
}