// Rewrite function with Class

class Car {
    constructor (brand, model, speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    };
    accelerate(amount) {
		this.speed += amount;
        console.log (accelerate (amount));
	};
	brake(amount) {
		this.speed += amount;
		console.log (brake (amount));
	};
	status() {
		console.log (`${this.brand} ${this.model} is running at ${this.speed} km/h`);
	};
}


let car = new Car("Renault", "Scenic", 60);

console.log(car); 
car.status(); 

class CarColor extends Car {
    constructor (brand, model, color) {
        super (brand, model, color);
        this.color = color;
    };
    carColor() {
        console.log (`${this.brand} ${this.model} is ${this.color}`)
    }

}
car = new CarColor("Renault", "Scenic", "Red");

console.log(car1);
car1.carColor(); 