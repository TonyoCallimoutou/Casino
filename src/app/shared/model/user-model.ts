import {GameEnum} from "../enums/game-enum";

export class UserModel {
  id: string;
  userName: string;
  email: string;
  constructor(id: string, userName: string, email: string) {
    this.id = id;
    this.userName = userName;
    this.email = email;
  }
}

export class UserAuth {
  email: string;
  password: string;
  userName?: string;
  constructor(email: string, userName: string, password: string) {
    this.email = email;
    this.userName = userName;
    this.password = password;
  }
}
