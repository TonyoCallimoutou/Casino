import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RouletteBet} from "../../shared/class/roulette-bet";
import {RouletteBetDTO} from "../../shared/class/roulette-bet-DTO";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RouletteService {

  private backHostUrl = environment.BACK_HOST_URL;
  private socketUrl = environment.BACK_HOST_SOCKET_URL + '/game/ws';

  private baseUrl = this.backHostUrl + '/game/roulette';

  private socket: WebSocket | undefined;
  private message: Subject<string>;

  constructor(
    private http: HttpClient
  ) {
    this.message = new Subject<string>();
  }

  connect(tableId: string): void {
    this.socket = new WebSocket(`${this.socketUrl}/roulette?tableId=${tableId}`);

    this.socket.onmessage = (event) => {
      this.message.next(event.data);  // Diffuse les messages à travers le Subject
    };

    this.socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }

  getMessage(): Observable<string> {
    return this.message.asObservable();
  }

  betOnNumber(data: RouletteBetDTO[]): Observable<any> {
    return this.http.post(this.baseUrl + '/bet', data);
  }
}
