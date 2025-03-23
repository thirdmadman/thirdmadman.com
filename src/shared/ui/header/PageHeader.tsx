interface IPageHeaderProps {
  title: string;
}

export function PageHeader({ title }: IPageHeaderProps) {
  return (
    <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-200">{title}</h1>
      </div>
    </header>
  );
}
