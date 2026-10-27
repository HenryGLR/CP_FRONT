import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import Card from '../components/Card'
import { cars, filterCars } from '../data/cars'

const categories = ['Todos', ...new Set(cars.map(car => car.category))]

export default function Carros() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [sort, setSort] = useState('featured')
  const filteredCars = filterCars(cars, { search, category, sort })

  function resetFilters() {
    setSearch('')
    setCategory('Todos')
    setSort('featured')
  }

  return (
    <>
      <section className="catalog-header" aria-labelledby="catalog-title">
        <div className="container">
          <nav className="breadcrumb" aria-label="Caminho da página">
            <Link to="/">Início</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Nossa frota</span>
          </nav>
          <div className="catalog-intro">
            <div>
              <span className="eyebrow">A COLEÇÃO ELITE MOTORS</span>
              <h1 id="catalog-title">Presença que inspira.<br /><em>Escolhas que marcam.</em></h1>
            </div>
            <p>Explore nossos importados e encontre<br />o modelo que combina com você.</p>
          </div>
        </div>
      </section>

      <section className="container catalog-section" aria-label="Catálogo de carros">
        <div className="catalog-toolbar">
          <div className="category-tabs" role="group" aria-label="Filtrar por categoria">
            {categories.map(item => (
              <button
                type="button"
                key={item}
                className={category === item ? 'selected' : ''}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item === 'Todos' ? 'Todos os carros' : item}
              </button>
            ))}
          </div>
          <div className="search-field">
            <Search size={17} aria-hidden="true" />
            <label htmlFor="search" className="sr-only">Buscar marca ou modelo</label>
            <input
              id="search"
              type="search"
              placeholder="Marca ou modelo"
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="catalog-meta">
          <span role="status">
            {filteredCars.length} {filteredCars.length === 1 ? 'carro encontrado' : 'carros encontrados'}
          </span>
          <label>
            <SlidersHorizontal size={14} aria-hidden="true" />
            <span className="sr-only">Ordenar carros</span>
            <select value={sort} onChange={event => setSort(event.target.value)}>
              <option value="featured">Destaques</option>
              <option value="price-asc">Menor diária</option>
              <option value="price-desc">Maior diária</option>
            </select>
          </label>
        </div>

        {filteredCars.length > 0 ? (
          <div className="cars-grid">
            {filteredCars.map(car => <Card key={car.id} car={car} />)}
          </div>
        ) : (
          <div className="no-results">
            <Search size={32} aria-hidden="true" />
            <h2>Nenhum carro encontrado.</h2>
            <p>Tente outra marca, modelo ou categoria.</p>
            <button type="button" className="button" onClick={resetFilters}>
              Limpar filtros <X size={17} aria-hidden="true" />
            </button>
          </div>
        )}
        <p className="demo-note">Projeto acadêmico FIAP. Fotos e preços ilustrativos; os valores não representam uma oferta comercial.</p>
      </section>
    </>
  )
}
