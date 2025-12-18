import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

/**
 * AppContent handles the loading logic and routing.
 * It must be wrapped by <Router> to use the useLocation hook.
 */
function AppContent() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 1. Trigger the loading screen whenever the URL path changes
    setIsLoading(true);
    
    // 2. Ensure the new page starts at the top of the screen
    window.scrollTo(0, 0);

    // 3. Keep the loader visible for exactly 10 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    // 4. Cleanup the timer if the user navigates away or closes the tab
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* CONDITIONAL RENDERING:
          If isLoading is true, show ONLY the Loader.
          If isLoading is false, show the Website.
      */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col min-h-screen animate-in fade-in duration-1000">
          <Navbar />
          
          {/* Main content expands to fill space, pushing footer to bottom */}
          <main className="flex-grow pt-20 px-6 max-w-6xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

/**
 * Main App Component
 */
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;