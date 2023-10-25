import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import InnovationPage from './pages/InnovationPage'
import ArticlePage from './pages/ArticlePage'
import Root from './components/Root'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <InnovationPage />
      },
      {
        path: '/artigo/:id',
        element: <ArticlePage />
      }
    ]
  }
])

const App = () => <RouterProvider router={router} />

export default App
