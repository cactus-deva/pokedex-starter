
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home';
import DetailPage from './pages/details';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/detail/:name',
      element: <DetailPage />,
    }
  ])
  return (
    <div className="min-h-[100vh] bg-[url('/src/assets/galaxy.jpeg')]">
      <RouterProvider router={router} />
    </div>

  )
}

export default App
