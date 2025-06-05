import { useState } from 'react'
import { createBrowserRouter, Routes, RouterProvider } from "react-router-dom"

import './App.css'
import { Navbar } from './components/Navbar'
import { ViewPaste } from './components/ViewPaste'
import { Home } from './components/Home'
import { Paste } from './components/Paste'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element:
        <div>
          <Navbar/>
          <Home/>
        </div>
      },
      {
        path: "/pastes",
        element:
        <div>
          <Navbar/>
          <Paste/>
        </div>
      },
      {
        path: "/pastes/:id",
        element:
        <div>
          <Navbar/>
          <ViewPaste/>
        </div>
      }
    ]
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
