import React, { useState, useEffect } from 'react';

export default function SectionLogo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="section section-logo">
      <div className={isVisible ? 'logo' : 'logo logo_hidden'}>
        <div className="logo__image" />
        <div className="logo__subtitle">#the_one_who_creates</div>
      </div>
    </div>
  );
}
