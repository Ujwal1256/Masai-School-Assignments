function Animal (){
  this.type = "Animal"
}

Animal.prototype.sound = function(){
  console.log("Anumal sound")
}

function Dog(){
  Animal.call(this);
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.sound = function() {
  console.log("Bark");
};

const myDog = new Dog();
const myanimal = new Animal();
myanimal.sound()
myDog.sound()
console.log(myDog.__proto__ === Dog.prototype);       
console.log(Dog.prototype.__proto__ === Animal.prototype); 
