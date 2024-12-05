import { Route, Routes } from 'react-router'
import './css/App.css'
import { lazy } from 'react';

const Home_page = lazy(() => import('./pages/home_page/Home_page'));
const About_us = lazy(() => import('./pages/about_us/About_us'));
const Layout_main = lazy(() => import('./pages/Layout_main.jsx'));
 
function App() {

  return (
    <>
      < Routes >

        <Route path="/" element={<Layout_main />}>
          <Route index element={<Home_page />} />
          <Route path="about" element={<About_us />} />
        </Route>

        <Route path="*" element={<p>No page</p>} />

      </Routes >
    </>
  )
}

export default App
