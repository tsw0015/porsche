import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

<<<<<<< HEAD
@Injectable({
    providedIn: 'root'
})

export class UserInfoService {
    private baseUrl:string = 'https://porsche-21768-default-rtdb.firebaseio.com/';
    private myInfoEndpoint:string = 'my-info.json';
=======

@Injectable({ providedIn: 'root' })

export class UserInfoService {
    private baseUrl: string = 'https://porsche-21768-default-rtdb.firebaseio.com/';
    private myInfoEndpoint: string = 'my-info.json';
>>>>>>> Assignment 8
    constructor(private http: HttpClient) {

    }

    getUserInfo() {
<<<<<<< HEAD
        console.log(this.baseUrl + this.myInfoEndpoint)
        return this.http.get<UserInfo>(this.baseUrl + this.myInfoEndpoint);
    }
=======
        return this.http.get<UserInfo>(this.baseUrl + this.myInfoEndpoint);
    }

    modifyUserInfo(data:UserInfo) {
        
        return this.http.put(this.baseUrl + this.myInfoEndpoint, data);

    }


>>>>>>> Assignment 8
}