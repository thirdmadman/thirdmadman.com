interface IBurgerMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export function BurgerMenuButton({ isMenuOpen, setIsMenuOpen }: IBurgerMenuButtonProps) {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center rounded-md dark:bg-neutral-800 p-2 text-neutral-400 hover:bg-neutral-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800 focus:outline-hidden"
      aria-controls="mobile-menu"
      aria-expanded="false"
      onClick={() => {
        setIsMenuOpen(!isMenuOpen);
      }}
    >
      <span className="absolute -inset-0.5"></span>
      <span className="sr-only">Open main menu</span>
      <svg
        className={`${isMenuOpen ? 'hidden' : 'block'} size-6`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <svg
        className={`${!isMenuOpen ? 'hidden' : 'block'} size-6`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  );
}
