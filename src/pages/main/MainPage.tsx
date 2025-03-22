import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router';

export function MainPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="section section-logo flex flex-col justify-center items-center min-h-screen bg-white dark:bg-black">
      <div className={isVisible ? 'logo' : 'logo logo_hidden'}>
        <div className="logo__image" />
        <div className="logo__subtitle">#the_one_who_creates</div>
        <Link to="/projects">
          <div className="logo__warning warning-dev">
            <div className="warning-dev__title">warning</div>
            <div className="warning-dev__description">development in progress...</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
