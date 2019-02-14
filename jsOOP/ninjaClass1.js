function Ninja(name) {
    var speed = 3,
        strength = 3;
    this.name = name;
    this.health = 100;

    this.sayName = function() {console.log(this.name); return this;} 
    this.showStats = function() {console.log(`Name: ${this.name}, Speed: ${speed}, Strength: ${strength}, Health: ${this.health}`); return this;} 
    this.drinkSake = function() {console.log('drinking sake'); this.health += 10; return this;}

}

var jim = new Ninja("Jim");
jim.sayName().showStats().drinkSake().showStats()