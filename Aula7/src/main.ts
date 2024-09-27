
import { PizzaService } from "./pizzaService";
import { Restaurant } from "./restaurant";
import { SaladService } from "./saladaService";


function main() {
  const pizzaService = new PizzaService();
  const saladService = new SaladService();

  const pizzaRestaurant = new Restaurant(pizzaService);
  const saladRestaurant = new Restaurant(saladService);

  pizzaRestaurant.serveDish();
  saladRestaurant.serveDish(); 
}

main();
