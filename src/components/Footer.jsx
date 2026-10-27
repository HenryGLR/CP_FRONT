import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link to="/" className="brand" aria-label="Elite Motors, início">
            <span className="brand-mark" aria-hidden="true">EM</span>
            <span className="brand-name">ELITE MOTORS<small>LOCAÇÃO DE IMPORTADOS</small></span>
          </Link>
          <p>Presença em cada detalhe. Liberdade em cada caminho.</p>
        </div>
        <Link to="/carros" className="text-link">
          Conheça nossa frota <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Elite Motors · Projeto acadêmico FIAP</span>
        <span>Henry Gabriel Lima Rigueira · RM 570063</span>
        <span>Imagens e valores ilustrativos.</span>
      </div>
    </footer>
  )
}
