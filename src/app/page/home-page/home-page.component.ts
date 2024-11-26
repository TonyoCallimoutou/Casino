import {Component} from '@angular/core';
import {TableService} from "../../service/game/table.service";
import {TableModel} from "../../shared/model/table-model";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {GameEnum} from "../../shared/enums/game-enum";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public listTable: TableModel[] = [];

  constructor(
    private rouletteService : TableService,
    private router: Router
  ) {
    this.rouletteService.connect();
    this.listenOpenTable();
  }

  private listenOpenTable() {
    this.rouletteService.getListOpenTable().subscribe(
      (listTable: TableModel[]) => {
        this.listTable = listTable;
      }
    );
  }

  public goToTable(table: TableModel) {
    switch (table.type) {
      case GameEnum.ROULETTE:
        this.router.navigateByUrl('/roulette/' + table.id)
        break;
      default:
        console.error('Unknown table type:', table.type);
    }
  }

}
