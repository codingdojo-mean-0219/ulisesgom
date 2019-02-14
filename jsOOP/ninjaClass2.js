function Ninja(name) {
    var speed = 3,
        strength = 3;
    this.name = name;
    this.health = 100;

    this.sayName = function() {console.log(this.name); return this;};

    this.showStats = function() {console.log(`Name: ${this.name}, Speed: ${speed}, Strength: ${strength}, Health: ${this.health}`); return this;};

    this.drinkSake = function() {console.log('drinking sake'); this.health += 10; return this;};

    this.punch = function(punched) {
        if (!(punched instanceof Ninja)) {
            throw new Error(punched + " is not a ninja")
        }
        punched.health -= 5;
        console.log(`${punched.name} was punched by ${this.name} and lost 5 health!`);
    };

    this.kick = function(kicked) {
        if (!(kicked instanceof Ninja)) {
            throw new Error(kicked + " is not a ninja")
        }
        var damage = strength * 15;
        kicked.health -= damage;
        console.log(`${kicked.name} was kicked by ${this.name} and lost ${damage} health!`);
    };

}

var blue = new Ninja("blue");
var red = new Ninja("red");

blue.showStats()
red.showStats().punch('yellow')
