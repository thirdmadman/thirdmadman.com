import { RouterProvider, createHashRouter } from 'react-router';
import routes from './routes';

const router = createHashRouter([routes]);

export function App() {
  return (
    <main className="app">
      <RouterProvider router={router} />
    </main>
  );
}
