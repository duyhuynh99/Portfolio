import { BrowserRouter } from 'react-router-dom';
import  { lazy, Suspense } from 'react';
import { StarsCanvas } from './components';
// Import các component cần lazy load
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));


function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-site-bg bg-cover bg-no-repeat bg-center'>
          <Suspense fallback={null}>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Tech />

          </Suspense>

          <div className='relative z-0'>
            <Suspense fallback={null}>
              <Works />
              <Contact />
              <StarsCanvas size={0.004} item={1000} />
            </Suspense>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;