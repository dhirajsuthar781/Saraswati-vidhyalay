import { Route, Routes } from 'react-router'
import './css/App.css'
import { lazy } from 'react';

const Home_page = lazy(() => import('./pages/home_page/Home_page'));
const Error_page = lazy(() => import('./pages/error_page/Error_page'));
const About_us = lazy(() => import('./pages/about_us/About_us'));
const Layout_main = lazy(() => import('./pages/Layout_main.jsx'));
const Academic_culture = lazy(() => import('./pages/academic-culture/Academic_culture'));
const School_culture = lazy(() => import('./pages/school_culture/School_culture'));
const Co_curriculum = lazy(() => import('./pages/co_curriculum/Co_curriculum'));
const Gallery = lazy(() => import('./pages/gallery/Gallery'));
const Admission = lazy(() => import('./pages/admissions/Admission'));
const Contact = lazy(() => import('./pages/contact/Contact'));



function App() {

  return (
    <>
      < Routes >

        <Route path="/" element={<Layout_main />}>
          <Route index element={<Home_page />} />
          <Route path="about-us" element={<About_us />} />
          <Route path="academic-culture" element={<Academic_culture />} />
          <Route path="school-culture" element={<School_culture />} />
          <Route path="co-curriculum" element={<Co_curriculum />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="admissions" element={<Admission />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<Error_page />} />

      </Routes >
    </>
  )
}

export default App
