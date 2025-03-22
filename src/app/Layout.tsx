import { Outlet } from 'react-router';

export function Layout() {
  return (
    <div className="h-full min-h-screen">
      <Outlet />
    </div>
  );
}
