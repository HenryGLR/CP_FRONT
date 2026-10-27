import test from 'node:test'
import assert from 'node:assert/strict'
import { cars, filterCars } from '../src/data/cars.js'

test('busca ignora espaços, maiúsculas e acentos', () => {
  assert.equal(filterCars(cars, { search: ' SÉRIE ' })[0].id, 'bmw-serie3')
  assert.equal(filterCars(cars, { search: 'mercedes' })[0].id, 'mercedes-amg')
})
test('combina categoria e busca e aceita resultados vazios', () => {
  assert.equal(filterCars(cars, { search: 'BMW', category: 'Esportivo' }).length, 0)
  assert.equal(filterCars(cars, { search: 'inexistente' }).length, 0)
  assert.ok(filterCars(cars, { category: 'Sedan' }).every(car => car.category === 'Sedan'))
})
test('ordena por preço sem modificar a ordem original do catálogo', () => {
  const originalIds = cars.map(car => car.id)
  assert.equal(filterCars(cars, { sort: 'price-asc' })[0].price, 790)
  assert.equal(filterCars(cars, { sort: 'price-desc' })[0].price, 2990)
  assert.deepEqual(cars.map(car => car.id), originalIds)
})
