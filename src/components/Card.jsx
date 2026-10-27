import { currency } from '../utils/format'

export default function Card({ car }) {
  return (
    <article className="car-card">
      <div className="car-photo">
        <img src={car.image} alt={car.alt} loading="lazy" width="900" height="600" />
        <span className="car-category">{car.category}</span>
      </div>
      <div className="car-content">
        <span className="eyebrow">{car.brand}</span>
        <h3>{car.model}</h3>
        <p className="car-description">{car.description}</p>
        <div className="car-bottom">
          <p><strong>{currency(car.price)}</strong><span> / diária</span></p>
          <span className="daily-label">VALOR<br />ILUSTRATIVO</span>
        </div>
      </div>
    </article>
  )
}
