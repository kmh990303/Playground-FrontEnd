import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Edit from './pages/Edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/edit',
    element: <Edit />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
