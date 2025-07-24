import { AdminOnly } from '@/components/admin/admin-only';
import { AdminNavigation } from '@/components/admin/AdminNavigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminOnly>
      <div className="flex min-h-screen">
        <aside className="w-64 border-r bg-background">
          <AdminNavigation />
        </aside>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </AdminOnly>
  );
}