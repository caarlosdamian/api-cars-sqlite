const knex = require("./knex");

const createCar = (car) => {
  return knex("cars").insert(car);
};

const getAllCars = () => {
  return knex("cars").select("*"); // go to table and retrive all info
};

const deleteCar = (id) => {
  return knex("cars").whete("id", id).del();
};

const updateCar = (id, car) => {
  return knex("cars").where("id", id).update(car);
};

module.exports = {
  createCar,
  getAllCars,
  deleteCar,
  updateCar,
};
