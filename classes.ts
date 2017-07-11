// interface describes the structure of an object
interface AttackerInterface {
  // attackers need a property "strength" (number)
  strength: number;

  // attackers need a method "recieveDamage()" that recieves a number argument
  recieveDamage(number);
}



class Soldier implements AttackerInterface {
  isDead: Boolean = false;

  constructor(
    public health: number,
    public strength: number,
    public specialization: string,
    public name: string,
    public weapon: string
  ) {}

  recieveDamage(damage: number) {
    this.health -= damage;

    return 'I\'ve been hit!'
  }
}


class Viking implements AttackerInterface {
  constructor(
    public name: string,
    public health: number,
    public strength: number
  ) {}

  recieveDamage(damage: number) {
    this.health -= damage;

  return 'ODIN!! RARR!!'

  }
}


class Saxon implements AttackerInterface {
  constructor(
    public health: number,
    public strength: number
  ) {}

  recieveDamage(damage: number) {
    this.health -= damage;

  return 'Please don\'t kill me.'

  }
}


const soldierA = new Soldier(1000, 20, 'sniper', 'Ragnarr', 'bow & arrow');
const soldierB = new Soldier(100, 300, 'berzerker', 'Gudrun', 'Battle Axe');

const saxonA = new Saxon(100, 10);
const saxonB = new Saxon(200, 20);

const vikingA = new Viking('Lief Erikson', 3000, 300);
const vikingB = new Viking('Ofred Stormcloak', 4000, 400);



function peopleAttack (person1: AttackerInterface, person2: AttackerInterface) {
  person2.recieveDamage(person1.strength);
  person1.recieveDamage(person2.strength);
}



const otherDude = { strength: 9999 };

peopleAttack(vikingA, vikingB);
peopleAttack(vikingA, vikingB);
peopleAttack(otherDude, vikingA);
