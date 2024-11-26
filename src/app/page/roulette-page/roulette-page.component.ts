import { Component } from '@angular/core';
import {LogWindowsComponent} from "../../shared/log-windows/log-windows.component";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";
import {RouletteComponent} from "./roulette/roulette.component";

@Component({
  selector: 'app-roulette-page',
  standalone: true,
  imports: [
    CommonModule,
    LogWindowsComponent,
    RouletteComponent,
  ],
  templateUrl: './roulette-page.component.html',
  styleUrl: './roulette-page.component.scss'
})
export class RoulettePageComponent {

  idTable : string | null;

  constructor(
    private router:  Router,
    private activedRoute: ActivatedRoute
  ) {
    if (this.activedRoute.snapshot.paramMap.get('idTable') == null) {
      this.router.navigateByUrl('');
    }
    this.idTable = this.activedRoute.snapshot.paramMap.get('idTable') ;

  }
}
