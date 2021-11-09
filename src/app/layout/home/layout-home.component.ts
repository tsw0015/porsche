import { Component } from "@angular/core";
import { Car } from "src/app/car-card/car.model";
import { mock_cars } from "src/app/car-card/mock-cars";

@Component ({
    selector: 'app-layout-home',
    templateUrl: './layout-home.component.html',
    styleUrls: ['./layout-home.component.css']
})

export class LayoutHomeComponent {
    cars: Car[] = [];
   
    constructor() {
        for (var car of mock_cars) {
            this.cars.push(new Car(car))
        }
    }
}