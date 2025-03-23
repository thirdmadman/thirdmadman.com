import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router';

export function MainPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen dark:bg-neutral-900 section-logo relative after:invert before:invert dark:after:filter-none dark:before:filter-none pt-[65px]">
      <div
        className={`flex flex-col items-center items-center justify-space-between text-black dark:text-neutral-100 transition duration-200 ${isVisible ? 'opacity-100' : `opacity-0`}`}
      >
        <div className="bg-[url(/svg/thirdmadman-logo-white.svg)] bg-contain bg-center bg-contain bg-no-repeat w-[40vh] h-[40vh] mb-5 invert dark:filter-none" />
        <div className="text-[4vh]">#the_one_who_creates</div>
        <Link to="/projects">
          <div className="warning-dev absolute right-[40px] top-[105px] uppercase flex flex-col justify-center items-center">
            <div className="warning-dev__title text-[3vh] border-b-2 border-neutral-700 dark:border-neutral-100 py-1 flex items-center after:invert before:invert dark:after:filter-none dark:before:filter-none">
              warning
            </div>
            <div className="text-[1.5vh] text-right">development in progress...</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
