import { Component, Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";

@Injectable()
@Component({
    selector: "porsche-user-info",
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
    myInfo: UserInfo | undefined;
    constructor(private userInfoService:UserInfoService) {

    }

    ngOnInit(): void {
        console.log("Sending a get request to the server")
        this.userInfoService.getUserInfo();
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