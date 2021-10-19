import { Component, OnInit } from "@angular/core";
import { CarCard } from "./car-card.model";
import { CarCardService } from "./car-card.service";


@Component({
    selector: 'app-car-card',
    templateUrl: './car-card.component.html',
    styleUrls: ['./car-card.component.css']
})

export class CarCardComponent implements OnInit {
    carInfo: CarCard | undefined;
    constructor(private carCardService:CarCardService) {
    }

    ngOnInit(): void {
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo();
    }

    
    showUserInfo() {
        this.carCardService.getUserInfo().subscribe((data: CarCard) => {
            console.log(data);
            this.carInfo = data;
        })
    }
}