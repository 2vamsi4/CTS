import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ui/index.css'
import App from '../src/app/App'
import LoginPage from './components/Login'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './app/routes'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <CartProvider>
         <AppRoutes />
      </CartProvider>
    </BrowserRouter>
)
