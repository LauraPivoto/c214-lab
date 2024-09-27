"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pizzaService_1 = require("./pizzaService");
const restaurant_1 = require("./restaurant");
const saladaService_1 = require("./saladaService");
function main() {
    const pizzaService = new pizzaService_1.PizzaService();
    const saladService = new saladaService_1.SaladService();
    const pizzaRestaurant = new restaurant_1.Restaurant(pizzaService);
    const saladRestaurant = new restaurant_1.Restaurant(saladService);
    pizzaRestaurant.serveDish();
    saladRestaurant.serveDish();
}
main();
