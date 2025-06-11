"use client"

import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"

interface LogoutButtonProps {
  className?: string
}

export const LogoutButton = ({ className }: LogoutButtonProps) => {
  const authState = useAuth()
  const logout = 'logout' in authState ? authState.logout : () => {}

  return (
    <Button onClick={() => logout()} variant="outline" className={className}>
      Log Out
    </Button>
  )
}