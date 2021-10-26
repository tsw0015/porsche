<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { CarCard } from "./car-card.model";
import { CarCardService } from "./car-card.service";
=======
import { Component, Input } from "@angular/core"
>>>>>>> Assignment 8


@Component({
    selector: 'app-car-card',
    templateUrl: './car-card.component.html',
    styleUrls: ['./car-card.component.css']
})

<<<<<<< HEAD
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
=======
export class CarCardComponent {
    @Input()
    model!: string;
    @Input()
    price!: string;
    @Input()
    picture!: string;
>>>>>>> Assignment 8
}