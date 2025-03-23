import { Link } from 'react-router';

interface IMenuLinkProps {
  link: string;
  text: string;
  isActive?: boolean;
}

export function MenuLink({ link, text, isActive = false }: IMenuLinkProps) {
  const baseClasses = 'block rounded-md px-3 py-2 text-sm font-medium';

  let addition = '';

  if (isActive) {
    addition = 'bg-neutral-200 dark:text-black dark:text-white dark:bg-neutral-900 ';
  } else {
    addition =
      'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white';
  }

  return (
    <Link to={link} className={`${baseClasses} ${addition}`} aria-current="page">
      {text}
    </Link>
  );
}
