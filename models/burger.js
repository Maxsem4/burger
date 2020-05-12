const orm = require("../config/orm.js");

class Burger {
  constructor({ burger_name, devoured = false }) {
    this.burger_name = burger_name;
    this.devoured = devoured;
  }

  static async select() {
    let burgers;
    await orm
      .selectAll("burgers")
      .then(row => (burgers = row))
      .catch(console.error);
    return burgers;
  }

  static async insert(burger) {
    let newBurger;
    await orm
      .insertOne("burgers", "burger_name", burger)
      .then(row => (newBurger = row))
      .catch(console.error);
    return newBurger;
  }

  static async update(id) {
    let updateBurger;
    await orm
      .updateOne("burgers", "devoured", true, "id", id)
      .then(row => (updateBurger = row))
      .catch(console.error);
    return updateBurger;
  }

  static async find(id) {
    let result;
    await orm
      .findById("burgers", "id", id)
      .then(row => (result = row))
      .catch(console.error);
    return result;
  }
}

module.exports = Burger;
