// Dados fictícios para fins acadêmicos; não representam oferta comercial.
export const cars = [
  { id: 'porsche-911', number: '01', brand: 'Porsche', model: '911 Carrera', category: 'Esportivo', power: 385, seats: 4, price: 2490, description: 'Uma conexão direta entre você e a estrada.', image: './images/porsche.jpg', alt: 'Porsche esportivo, imagem ilustrativa' },
  { id: 'mercedes-amg', number: '02', brand: 'Mercedes-Benz', model: 'AMG GT', category: 'Esportivo', power: 530, seats: 2, price: 890, description: 'Elegância que transforma os seus trajetos.', image: './images/mercedes.jpg', alt: 'Mercedes-Benz, imagem ilustrativa' },
  { id: 'bmw-serie3', number: '03', brand: 'BMW', model: 'Série 3', category: 'Sedan', power: 184, seats: 5, price: 790, description: 'O equilíbrio entre presença e prazer de dirigir.', image: './images/bmw.jpg', alt: 'BMW, imagem ilustrativa' },
  { id: 'audi-rs6', number: '04', brand: 'Audi', model: 'RS 6 Avant', category: 'Sedan', power: 600, seats: 5, price: 2990, description: 'Performance para tornar cada instante único.', image: './images/audi.jpg', alt: 'Audi RS, imagem ilustrativa' },
  { id: 'camaro', number: '06', brand: 'Chevrolet', model: 'Camaro', category: 'Esportivo', power: 461, seats: 4, price: 2190, description: 'Atitude e potência em uma experiência marcante.', image: './images/camaro.jpg', alt: 'Chevrolet Camaro, imagem ilustrativa' },
]

export function filterCars(list, { search = '', category = 'Todos', sort = 'featured' } = {}) {
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const query = normalize(search.trim())
  const result = list.filter(car =>
    (category === 'Todos' || car.category === category) &&
    normalize(car.brand + ' ' + car.model).includes(query),
  )
  if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
  return result
}
