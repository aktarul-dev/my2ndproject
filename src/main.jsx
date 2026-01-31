import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './app.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home.jsx'
import BlankPage from './pages/dashboard/BlankPage.jsx'
import Services from './pages/home/Services.jsx'
import Blogs from './pages/blogs/Blogs.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blogs />} />

        {/* 404 route */}
        <Route path="*" element={<BlankPage />} />

      </Route>
    </Routes>
  </BrowserRouter>
)