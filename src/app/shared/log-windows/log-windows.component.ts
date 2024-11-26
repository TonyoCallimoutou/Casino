import {Component, Input} from '@angular/core';
import {RouletteService} from "../../service/game/roulette.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-log-windows',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './log-windows.component.html',
  styleUrl: './log-windows.component.scss'
})
export class LogWindowsComponent {

  @Input({required : true}) idTable! : string;

  messages : string[] = [];
  constructor(
    private rouletteService : RouletteService,
  ) {
    this.rouletteService.connect(this.idTable);
    this.getLog();
  }

  public getLog(){
    this.rouletteService.getMessage().subscribe(
      (message: string) => {
        this.messages.push(message);
      }
    );
  }

}
