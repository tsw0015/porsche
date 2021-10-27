import { Injectable } from "@angular/core";
import { AngularFireDatabase} from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { UserInfo } from "../headers/user-info.model";


@Injectable({
    providedIn: 'root'
})
export class DataBaseService {
    items: Observable<any []>;
    constructor(private db:AngularFireDatabase) {
        console.log("setting up firebase communication");
        this.items = this.db.list<UserInfo>('my-info').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: UserInfo[]) => {
            console.log("Data recieved");
            for (let item of data) {
                console.log(item);
                
            }
        })
    }
}