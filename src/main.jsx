import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './errorpage.jsx';

const navigation = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]); 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={navigation}/>
  </StrictMode>,
)
