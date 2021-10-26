<<<<<<< HEAD
import { HttpClient } from "@angular/common/http";
=======
>>>>>>> Assignment 8
import { Component, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";


@Component({
    selector: "porsche-user-info",
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
    myInfo: UserInfo | undefined;
<<<<<<< HEAD
    constructor(private userInfoService:UserInfoService) {
=======

    constructor(private userInfoService:UserInfoService) {

>>>>>>> Assignment 8
    }

    ngOnInit(): void {
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo();
    }

    
    showUserInfo() {
        this.userInfoService.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}