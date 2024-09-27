import { FoodService } from "./foodServideInterface";

export class PizzaService implements FoodService {
  getDish(): string {
    return "Pizza Margherita";
  }
}