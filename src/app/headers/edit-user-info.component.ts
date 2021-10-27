import { Component } from "@angular/core";
import { DataBaseService } from "../body/database.service";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";

@Component({
    selector: 'app-edit-user-info',
    templateUrl: 'edit-user-info.component.html'
})
export class EditUserInfoComponent {
    constructor(private infoService: UserInfoService, private dbService:DataBaseService) {
        this.dbService.showData();
    }
    onUpdateUserInfo(data:UserInfo) {
        this.infoService.modifyUserInfo(data).subscribe(data => {
            console.log("Updated User Info")
        });
    }
}