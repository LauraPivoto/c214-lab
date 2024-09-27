"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
class Restaurant {
    constructor(foodService) {
        this.foodService = foodService;
    }
    serveDish() {
        console.log(`Serving: ${this.foodService.getDish()}`);
    }
}
exports.Restaurant = Restaurant;
