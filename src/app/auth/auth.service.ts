import { Injectable } from "@angular/core" ;
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment"
import { AuthResponse } from "./authResponse";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signUpEndpoint:string = "signUp";
    signInEndpoint:string = "signInWithPassword";

    public constructor(private http:HttpClient) {

    }

    public signup(email:string, password:string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
            
        }
        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signUpEndpoint + '?' + 'key=' + environment.firebaseConfig.apiKey, requestBody)
    }

    public login(email:string, password:string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true    
        }

        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signUpEndpoint + '?' + 'key=' + environment.firebaseConfig.apiKey, requestBody)
    }
}