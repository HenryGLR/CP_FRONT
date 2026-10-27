import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import Card from '../components/Card'
import { cars } from '../data/cars'

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="./images/hero.jpg"
          alt="Porsche preto em uma rodovia"
          fetchPriority="high"
          width="1920"
          height="1280"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-content">
          <span className="eyebrow">ELITE MOTORS · LOCAÇÃO DE IMPORTADOS</span>
          <h1 id="hero-title">Uma nova definição<br />de <em>dirigir.</em></h1>
          <p>Modelos que unem presença, conforto e performance. Escolha o importado que combina com o seu próximo caminho.</p>
          <Link to="/carros" className="button">
            Explore nossa frota <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
        <div className="container hero-bottom">
          <span>UMA COLEÇÃO. DIFERENTES FORMAS DE IR ALÉM.</span>
          <span>CONHEÇA A ELITE <ArrowDown size={14} aria-hidden="true" /></span>
        </div>
      </section>

      <section className="container section-space" aria-labelledby="featured-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELEÇÃO ELITE</span>
            <h2 id="featured-title">Extraordinários.<br /><em>Por natureza.</em></h2>
          </div>
          <div>
            <p>Design marcante e personalidade em cada modelo. Conheça os destaques da nossa coleção.</p>
            <Link to="/carros" className="text-link">
              Ver coleção completa <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="cars-grid">
          {cars.slice(0, 3).map(car => <Card key={car.id} car={car} />)}
        </div>
        <p className="demo-note">Projeto acadêmico · Fotos e valores de locação ilustrativos.</p>
      </section>

      <section className="collection-note" aria-labelledby="collection-title">
        <div className="container">
          <div>
            <span className="eyebrow">ESCOLHA O SEU ESTILO</span>
            <h2 id="collection-title">O próximo caminho<br />merece <em>uma boa escolha.</em></h2>
            <p>Compare os modelos, explore as categorias e consulte os valores por diária em um só lugar.</p>
          </div>
          <Link to="/carros" className="button">
            Conhecer os carros <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
