import * as catagoryAPI from "./demoCategory";

const coffee = [
  {
    _id: "abc0a001b000c001",
    title: "經典九號",
    image: "../images/1黑沃烘豆師經典九號.jpg",
    category: { _id: "abc0a001b000c000", name: "Coffee" },
    numberInStock: 6,
  },
];

export function getCoffee() {
  return coffee;
}

export function getCoffee(id) {
  return coffee.find((c) => c._id === id);
}

export function saveCoffee(coffee) {
  let coffeeInDb = coffees.find((c) => c._id === c._id) || {};
  coffeeInDb.name = coffee.name;
  coffeeInDb.category = categorysAPI.categorys.find(
    (c) => c._id === coffee.categoryId
  );
  coffeeInDb.numberInStock = coffee.numberInStock;

  if (!coffeeInDb._id) {
    coffeeInDb._id = Date.now();
    coffees.push(coffeeInDb);
  }

  return coffeeInDb;
}

export function deleteCoffee(id) {
  let coffeeInDb = coffees.find((c) => c._id === id);
  coffees.splice(coffees.indexOf(coffeeInDb), 1);
  return coffeeInDb;
}
