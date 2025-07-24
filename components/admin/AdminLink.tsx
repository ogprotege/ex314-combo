'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';

export function AdminLink() {
  const authState = useAuth();
  const isAdmin = 'isAdmin' in authState ? authState.isAdmin : false;

  if (!isAdmin) return null;

  return (
    <Link 
      href="/admin/chat-analytics" 
      className="transition-colors hover:text-primary text-destructive font-semibold"
    >
      Admin
    </Link>
  );
}