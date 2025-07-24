'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Share2,
  Database
} from 'lucide-react';

const adminLinks = [
  {
    href: '/admin/chat-analytics',
    label: 'Chat Analytics',
    icon: BarChart3
  },
  {
    href: '/admin/logs',
    label: 'Conversation Logs',
    icon: Database
  },
  {
    href: '/admin/contact-submissions',
    label: 'Contact Submissions',
    icon: MessageSquare
  },
  {
    href: '/admin/share-analytics',
    label: 'Share Analytics',
    icon: Share2
  }
];

export function AdminNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-2 p-4">
      <h2 className="text-lg font-semibold mb-4">Admin Panel</h2>
      {adminLinks.map(link => {
        const Icon = link.icon;
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
              isActive 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <Icon className="w-4 h-4" />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}