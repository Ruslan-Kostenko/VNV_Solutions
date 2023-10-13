// import { Layout } from './Layout';
// import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

// import { HeaderBoot } from './HeaderBoot/HeaderBoot';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './SecAbout/About';
import Services from './SecServices/Services';
import Projects from './SecProjects/Projects';
import FAQ from './SecFAQ/FAQ';
import Contacts from './SecContacts/Contacts';
import { GlobalStyle } from 'GlobalStyle';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Home = lazy(() => import('../pages/Home'));
// const Services = lazy(() => import('../pages/Services'));
// const Projects = lazy(() => import('../pages/Projects'));
// const Team = lazy(() => import('../pages/Team'));
// const NotFound = lazy(() => import('../pages/NotFound'));

{
  /* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes> */
}

export const App = () => {
  return (
    <>
      <Header />
      {/* <HeaderBoot /> */}
      <Hero />
      <About />
      <Services />
      <Projects />
      <FAQ />
      <Contacts />
      <GlobalStyle />
    </>
  );
};
