import { FoodService } from "./foodServideInterface";

export class Restaurant {
  private foodService: FoodService;

  constructor(foodService: FoodService) {
    this.foodService = foodService;
  }

  serveDish(): void {
    console.log(`Serving: ${this.foodService.getDish()}`);
  }
}