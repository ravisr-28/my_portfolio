import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import TopBar from './components/core/TopBar'
import ContentWrapper from './components/core/ContentWrapper'
import FloatingContactButton from './components/common/FloatingContactButton'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import ExperiencePage from './pages/ExperiencePage'
import PortfolioPage from './pages/PortfolioPage'

import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="antialiased bg-gray-50 dark:bg-black transition-colors duration-300 min-h-screen">
        <TopBar />
        <Header />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />

            <Route path="/contact-us" element={<ContactPage />} />
          </Routes>
          <Footer />
        </ContentWrapper>
        <FloatingContactButton />
      </div>
    </Router>
  )
}

export default App
