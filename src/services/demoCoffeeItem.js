import * as categoryAPI from "./demoCategory";

const coffee = [
  {
    _id: "abc0a001b000c001",
    title: "經典九號",
    image: "../images/1黑沃烘豆師經典九號.jpg",
    category: { _id: "abc0a001b000c000", name: "Coffee" },
    numberInStock: 6,
  },
];

export function getCoffees() {
  return coffee;
}

export function getCoffee(id) {
  return coffee.find((c) => c._id === id);
}

export function saveCoffee(coffee) {
  let coffeeInDb = coffee.find((c) => c._id === c._id) || {};
  coffeeInDb.name = coffee.name;
  coffeeInDb.category = categoryAPI.category.find(
    (c) => c._id === coffee.categoryId
  );
  coffeeInDb.numberInStock = coffee.numberInStock;

  if (!coffeeInDb._id) {
    coffeeInDb._id = Date.now();
    coffee.push(coffeeInDb);
  }

  return coffeeInDb;
}

export function deleteCoffee(id) {
  let coffeeInDb = coffee.find((c) => c._id === id);
  coffee.splice(coffee.indexOf(coffeeInDb), 1);
  return coffeeInDb;
}
