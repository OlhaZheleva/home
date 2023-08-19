// "use strict";

// // Реалізуйте наступну систему, схожу до розглянутої на вебінарі:

// // 1) чотири класи для створення об'єктів-сутностей (це можуть бути тварини, покемони, раси і т.д. - проявіть фантазію)

// // 2) у кожного класу має бути мінімум 3 властивості та мінімум 3 методи(але можна й більше)

// // 3) у кожного класу має бути своя унікальна властивість

// // 4) у кожного класу має бути приватна властивість

// // 4) у двох класів має бути спільний предок та спільний метод характерний тільки для них

// // 5) у всіх чотирьох класів має бути один (крім проміжних) клас-предок

class Vehicle {
  #firstPrototype;

  constructor(type, energy, year) {
    this.type = type;
    this.energy = energy;
    this.#firstPrototype = year;
  }

  definition = () =>
    console.log(
      `A vehicle is a piece of equipment designed to transport people or cargo.`
    );
  inHistory = () =>
    console.log(
      `Fist ${this.type} prototype was created in ${this.#firstPrototype}`
    );
  drive = () => console.log(`Traction is created by ${this.energy}`);
}

class Car extends Vehicle {
  #vincode;

  constructor(type, energy, year, vincode, seats, fuel) {
    super(type, energy, year);
    this.#vincode = vincode;
    this.seats = seats;
    this.fuel = fuel;
  }

  comfort = () => {
    if (seats >= 5) {
      console.log(`Good for family`);
    } else {
      console.log(`For single people`);
    }
  };
  getName() {
    return this.make + " " + this.model;
  }
  drive = () => {
    drive = () => console.log(`Traction is created by ${this.energy}`);
  };

  privacy = () => {
    console.log(`The vincode,${this.#vincode}, is unique number for separate unit`);
  };
}

class Aircraft extends Vehicle {
  #construction;

  constructor(type, energy, year, distance, speed, type) {
    super(type, energy, year);
    this.distance = distance;
    this.speed = speed;
    this.#construction = type;
  }

  drive = () => {
    drive = () => console.log(`Traction is created by ${this.energy}`);
  }

  flightDuration = () => {
    return this.speed * this.distance;
  };

  constructionType = () => {
    return this.#construction;
  }

}

class Tesla extends Car {
  
  constructor(model, chargetime) {
      super('Tesla', model);
      this.chargetime = chargetime;
  }

  charge() {
      console.log("Charging...");
  }
  
}



