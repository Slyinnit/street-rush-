// Car definitions for Street Rush
// Each car has stats: name, maxSpeed, acceleration, price, and ownership

const CARS = [
  { name: "Basic Blue", maxSpeed: 5, acceleration: 0.2, price: 0, owned: true },
    { name: "Sly Kosi Racer", maxSpeed: 6, acceleration: 0.25, price: 100, owned: false },
      { name: "Speed Demon", maxSpeed: 7, acceleration: 0.3, price: 200, owned: false },
        { name: "Turbo Storm", maxSpeed: 8, acceleration: 0.35, price: 300, owned: false }
          // 👉 you can keep adding more cars here later
          ];

          // Example: selecting the first car by default
          let selectedCar = CARS[0];