import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Detailprojects from './components/Detailprojects'
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="About" element={<About />} />
          <Route exact path="Skills" element={<Skills />} />
          <Route exact path="Projects" element={<Projects />} />
          <Route exact path="Contact" element={<Contact />} />
          <Route exact path="Detailprojects" element={<Detailprojects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
