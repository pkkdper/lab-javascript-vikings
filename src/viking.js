// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[indexSaxon];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let damageSaxon = randomSaxon.receiveDamage(randomViking.attack());
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(indexSaxon, 1);
    }
    return damageSaxon;
  }
  saxonAttack() {
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking =
      this.vikingArmy[indexViking];
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let damageViking = randomViking.receiveDamage(randomSaxon.attack());
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(indexViking, 1)
    }
    return damageViking;
  }
  // showStatus();
}
