function createCar (make, model,year){
  
  let car = {
    make : make,
    model: model,
    year: year,
    describeCar: function (){
      console.log(`This car is a ${year} ${make} ${model}`)
    }
  };
  
  return car;
}

const car = createCar("Toyota", "Camry", 2022);
car.describeCar();
