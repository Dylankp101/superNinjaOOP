class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayname(){
        console.log(`Name: ${ this.name }`)
    }
    showstats(){
        console.log(`Health: ${ this.health } Speed: ${this.speed} Strength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
        console.log(`Health: ${ this.health } `)

    }
}

class sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        const drink = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    showSenseiStats(){
        console.log(`Health: ${ this.health } Speed: ${this.speed} Strength: ${this.strength} Wisdom: ${this.wisdom}`)

    }

}


const ninja1 = new Ninja("Dylan KP");
ninja1.sayname();
ninja1.showstats();
ninja1.drinkSake();
ninja1.showstats();
const superSensei = new sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showSenseiStats();