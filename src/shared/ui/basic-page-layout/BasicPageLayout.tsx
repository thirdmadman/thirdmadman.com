export function BasicPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 dark:bg-neutral-900">{children}</div>
    </main>
  );
}
