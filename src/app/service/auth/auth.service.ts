import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserAuth} from "../../shared/model/user-model";
import {CookieHelper} from "../../shared/service/cookie.helper";
import {CookieKey} from "../../shared/model/cookie-key";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private backHostUrl = environment.BACK_HOST_URL;

  private baseUrl = this.backHostUrl + '/auth';

  constructor(
    private http: HttpClient
  ) {}

  login(user: UserAuth) : void {
    this.http.post(this.baseUrl + '/login', user, { responseType: 'text' }  )
      .pipe()
      .subscribe((response: string) => {
        console.log(CookieKey.TOKEN)
        CookieHelper.set(CookieKey.TOKEN, response);
      });
  }

  signup(userAuth: UserAuth) {
    this.http.post(this.baseUrl + '/signup', userAuth, { responseType: 'text' })
      .pipe()
      .subscribe((response: string) => {
        CookieHelper.set(CookieKey.TOKEN, response);
      });
  }
}
