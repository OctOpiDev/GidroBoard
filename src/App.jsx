import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import LayoutApp from './components/layout/LayoutApp'
import Userpage from './pages/Userpage'
import LoginPage from './pages/auth/LoginPage'
import DocsPage from './pages/auth/docs/DocsPage'

function App() {


  return (
    <>
  <Routes>
  <Route path='/login' element={<LoginPage />} />
    <Route path='/' element={<LayoutApp />}>
      <Route index element={<Homepage />} />
      <Route path='/users' element={<Userpage />} />
      <Route path='/docs' element={<DocsPage />} />
    </Route>
  </Routes>
    </>
  )
}

export default App
