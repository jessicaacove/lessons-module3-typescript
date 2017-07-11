var Soldier = (function () {
    function Soldier(health, strength, specialization, name, weapon) {
        this.health = health;
        this.strength = strength;
        this.specialization = specialization;
        this.name = name;
        this.weapon = weapon;
        this.isDead = false;
    }
    Soldier.prototype.recieveDamage = function (damage) {
        this.health -= damage;
        return 'I\'ve been hit!';
    };
    return Soldier;
}());
var Viking = (function () {
    function Viking(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    Viking.prototype.recieveDamage = function (damage) {
        this.health -= damage;
        return 'ODIN!! RARR!!';
    };
    return Viking;
}());
var Saxon = (function () {
    function Saxon(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    Saxon.prototype.recieveDamage = function (damage) {
        this.health -= damage;
        return 'Please don\'t kill me.';
    };
    return Saxon;
}());
var soldierA = new Soldier(1000, 20, 'sniper', 'Ragnarr', 'bow & arrow');
var soldierB = new Soldier(100, 300, 'berzerker', 'Gudrun', 'Battle Axe');
var saxonA = new Saxon(100, 10);
var saxonB = new Saxon(200, 20);
var vikingA = new Viking('Lief Erikson', 3000, 300);
var vikingB = new Viking('Ofred Stormcloak', 4000, 400);
function peopleAttack(person1, person2) {
    person2.recieveDamage(person1.strength);
    person1.recieveDamage(person2.strength);
}
var otherDude = { strength: 9999 };
peopleAttack(vikingA, vikingB);
peopleAttack(vikingA, vikingB);
peopleAttack(otherDude, vikingA);
