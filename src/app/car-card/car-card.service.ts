import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CarCard } from "./car-card.model";

@Injectable({
    providedIn: 'root'
})

export class CarCardService {
    private baseUrl:string = 'https://porsche-21768-default-rtdb.firebaseio.com/';
    private myInfoEndpoint:string = 'car-cards.json';
    constructor(private http: HttpClient) {

    }

    getUserInfo() {
        console.log(this.baseUrl + this.myInfoEndpoint)
        return this.http.get<CarCard>(this.baseUrl + this.myInfoEndpoint);
    }
}