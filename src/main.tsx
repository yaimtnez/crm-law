import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import DashboardLayout from './features/dashboard/layouts/DasboardLayout'
// import LoginPage from './features/auth/pages/LoginPage'
// import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <LoginPage /> */}
    <DashboardLayout />
  </StrictMode>,
)
