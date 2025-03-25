import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import FriendForge from './projects/FriendForge'
// import LittleNav from './LittleNav'
import ChangeMode from './ChangeMode'

const pageVariants = {
  initial: { opacity: 0, y: 50 },    // Start below the viewport
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },  // Fade in and slide up
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },   // Fade out and slide up
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/Projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/About" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/Contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/FriendForge" element={<PageWrapper><FriendForge /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <ChangeMode />
      <div className="main-content">
        <Header />
        {/* <LittleNav /> */}
        <AnimatedRoutes />
        <Footer />
      </div>
      <div className="loopy-marquee">
        <span>
          Python / JavaScript / SQL / HTML / CSS / React / React Hooks / Redux Toolkit / Django / PostgreSQL / MongoDB /
          FastAPI / Bootstrap / Tailwind / Python / JavaScript / SQL / HTML / CSS / React / React Hooks / Redux Toolkit
          / Django / PostgreSQL / MongoDB / FastAPI / Bootstrap / Tailwind
        </span>
      </div>
      <div className="blur-bottom"></div>
    </Router>
  );
}

export default App;