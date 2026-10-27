import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Carros from './pages/Carros'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = pathname === '/carros'
      ? 'Nossa frota | Elite Motors'
      : pathname === '/'
        ? 'Elite Motors | Locação de carros importados'
        : 'Página não encontrada | Elite Motors'
  }, [pathname])

  return null
}

function skipToContent(event) {
  event.preventDefault()
  const content = document.getElementById('conteudo')
  content.focus()
  content.scrollIntoView()
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <a className="skip-link" href="#conteudo" onClick={skipToContent}>Pular para o conteúdo</a>
      <Navbar />
      <main id="conteudo" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carros" element={<Carros />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
