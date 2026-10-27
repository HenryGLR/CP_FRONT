import { Link } from 'react-router-dom'
export default function NotFound() {
  return <section className="container empty-page"><span className="eyebrow">404 · ROTA NÃO ENCONTRADA</span><h1>Parece que saímos da rota.</h1><p>Volte ao início e encontre seu próximo carro.</p><Link className="button" to="/">Voltar ao início</Link></section>
}
