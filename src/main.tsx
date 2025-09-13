import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App.tsx';

import TagManager from 'react-gtm-module';

if (!import.meta.env.DEV) {
  const tagManagerArgs = {
    gtmId: 'GTM-T7999C3W',
  };

  TagManager.initialize(tagManagerArgs);
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
