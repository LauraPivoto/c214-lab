import { FoodService } from "./foodServideInterface";

export class SaladService implements FoodService {
    getDish(): string {
      return "Caesar Salad";
    }
}