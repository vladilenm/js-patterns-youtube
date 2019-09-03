class Car {
  constructor(model, price) {
    this.model = model
    this.price = price
  }
}

class CarFactory {
  constructor() {
    this.cars = []
  }

  create(model, price) {
    const candidate = this.getCar(model)
    if (candidate) {
      return candidate
    }

    const newCar = new Car(model, price)
    this.cars.push(newCar)
    return newCar
  }

  getCar(model) {
    return this.cars.find(car => car.model === model)
  }
}

const factory = new CarFactory()

const bmwX6 = factory.create('bmw', 10000)
const audi = factory.create('audi', 12000)
const bmwX3 = factory.create('bmw', 8000)

console.log(bmwX3 === bmwX6)

