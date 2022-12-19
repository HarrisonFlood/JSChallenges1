class Pet {
    constructor (name, hp, age, type, colour, lastFed, lastWatered, meds, happiness) {
        this.name = name;
        this.hp = hp;
        this.age = age;
        this.type = type;
        this.colour = colour;
        this.lastFed = lastFed;
        this.lastWatered = lastWatered;
        this.meds = meds;
        this.happiness = happiness;
    }
}

const Patch = new Pet ("Patch", 100, 12, "Dog", "White", "18:00", "17:00", "18:00", 50)