import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Elite Motors, início" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">EM</span>
          <span className="brand-name">ELITE MOTORS<small>LOCAÇÃO DE IMPORTADOS</small></span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="main-nav"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        <nav id="main-nav" className={isOpen ? 'navigation is-open' : 'navigation'} aria-label="Navegação principal">
          <NavLink to="/" end onClick={closeMenu}>Início</NavLink>
          <NavLink to="/carros" onClick={closeMenu}>Nossa frota</NavLink>
          <Link to="/carros" className="button button-small" onClick={closeMenu}>
            Explorar coleção <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
