import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {TableModel} from "../../shared/model/table-model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private socketUrl = environment.BACK_HOST_SOCKET_URL + '/game/ws';

  private socket: WebSocket | undefined;
  private listOpenTable: Subject<TableModel[]>;

  constructor() {
    this.listOpenTable = new Subject<TableModel[]>();
  }

  connect(): void {
    this.socket = new WebSocket(`${this.socketUrl}/table`);

    this.socket.onmessage = (event) => {
      this.listOpenTable.next(this.parseStringToObject(event.data));  // Diffuse les messages à travers le Subject
    };

    this.socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }

  parseStringToObject(jsonString: string): TableModel[] {
    try {
      return JSON.parse(jsonString) as TableModel[];
    } catch (error) {
      console.error('Invalid JSON string:', error);
      return [];
    }
  }

  getListOpenTable(): Observable<TableModel[]> {
    return this.listOpenTable.asObservable();
  }
}
