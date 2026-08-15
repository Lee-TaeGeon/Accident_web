import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router'

import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import Experiments from './pages/Experiments.jsx'
import Demo from './pages/Demo.jsx'
import Results from './pages/Results.jsx'
import Team from './pages/Team.jsx'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/results" element={<Results />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App