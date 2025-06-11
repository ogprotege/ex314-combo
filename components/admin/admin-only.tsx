"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";

interface AdminOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * AdminOnly component
 * Only renders its children if the current user has admin role
 * Otherwise shows nothing or a fallback component if provided
 */
export function AdminOnly({ children, fallback }: AdminOnlyProps) {
  const authState = useAuth();
  const isLoading = authState.isLoading;
  const isAuthenticated = authState.isAuthenticated;
  const isAdmin = 'isAdmin' in authState ? authState.isAdmin : false;
  
  // Still loading or not authenticated
  if (isLoading || !isAuthenticated) {
    return fallback ? <>{fallback}</> : null;
  }

  // Not an admin
  if (!isAdmin) {
    return fallback ? <>{fallback}</> : null;
  }

  // User is an admin
  return <>{children}</>;
}