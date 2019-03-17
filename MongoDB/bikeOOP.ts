class Bike {
    miles: number;
    price: number;
    max_speed: number;

    constructor(price: number, max_speed:number ) {
        this.price = price,
        this.max_speed = max_speed,
        this.miles = 0;
    }
    displayInfo() {
        console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}`);
        return this;
    };
    ride() {
        console.log('Riding');
        this.miles += 10;
        return this;
    };
    reverse() {
        console.log('Reversing');
        this.miles -= 5;
        if (this.miles < 0) {
            this.miles = 0;
        }
        return this;
    };
}

let bike1 = new Bike(12, 25);
let bike2 = new Bike(44, 15);
let bike3 = new Bike(15, 34);

bike1.ride().ride().ride().reverse().displayInfo()
bike2.ride().ride().reverse().reverse().displayInfo()
bike3.reverse().reverse().displayInfo()

