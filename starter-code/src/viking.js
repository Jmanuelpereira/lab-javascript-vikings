// Soldier
class Soldier {
    constructor(health, strength) {

        this.health = health;
        this.strength = strength;

    }

    attack(){

        return this.strength;

    }

    receiveDamage(theDamage){

         this.health -= theDamage;
    }
}


// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
    super(health,strength);
    this.name = name;

    }

receiveDamage(theDamage) {

    this.health -= theDamage;
    if(this.health <= 0)
    return `${this.name} has died in act of combat`
    else 
    return `${this.name} has received ${theDamage} points of damage`

}

battleCry(){

    return "Odin Owns You All!"

}




}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength);
      
    
        }
    
    receiveDamage(theDamage) {
    
        this.health -= theDamage;
        if(this.health <= 0)
        return `A Saxon has died in combat`
        else 
        return `A Saxon has received ${theDamage} points of damage`
    
    }
}//end saxon class
    



// War
class War {
    constructor(){
     this.vikingArmy = [];
     this.saxonArmy = [];
    }

    addViking(viking){

         this.vikingArmy.push(viking);

    }

    addSaxon(saxon){

        this.saxonArmy.push(saxon);

    }

    vikingAttack(){

        let indexS = Math.floor(Math.random() * this.saxonArmy.length)
        let indexV = Math.floor(Math.random() * this.vikingArmy.length)


        let alive =  this.saxonArmy[indexS].receiveDamage(this.vikingArmy[indexV].strength)
        
        if(this.saxonArmy[indexS].health <= 0)
        this.saxonArmy.splice(indexS,1)
        return alive
        
         
               
    }

    saxonAttack(){

        let indexS = Math.floor(Math.random() * this.saxonArmy.length)
        let indexV = Math.floor(Math.random() * this.vikingArmy.length)


        let alive2 =  this.vikingArmy[indexV].receiveDamage(this.saxonArmy[indexS].strength)
        
        if(this.vikingArmy[indexV].health <= 0)
        this.vikingArmy.splice(indexV,1)
        return alive2
        

    }


    showStatus() {
        
        if(this.vikingArmy <= 0)
        return "Saxons have fought for their lives and survived another day..."
        else if (this.saxonArmy <= 0)
        return "Vikings have won the war of the century!"
        else 
        return "Vikings and Saxons are still in the thick of battle."
  

    }



}//war class end
