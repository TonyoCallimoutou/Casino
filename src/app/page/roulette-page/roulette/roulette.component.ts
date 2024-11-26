import {Component, Input} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {RouletteService} from "../../../service/game/roulette.service";
import {RouletteNumberEnum} from "../../../shared/enums/roulette-number-enum";
import {RouletteTypeBetEnum} from "../../../shared/enums/roulette-type-bet-enum";
import {RouletteBetDTO} from "../../../shared/class/roulette-bet-DTO";
import {EnumUtils} from "../../../shared/utils/EnumUtils";

@Component({
  selector: 'app-roulette',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './roulette.component.html',
  styleUrl: './roulette.component.scss'
})
export class RouletteComponent {

  @Input({required: true}) idTable!: string;
  @Input({required: true}) idUser!: string;

  numbers = Object.entries(RouletteNumberEnum).map(([key, value]) => ({ key, value }))
  choices: number[] = [];


  amount: number = 0;

  listBet: RouletteBetDTO[] = [];

  constructor(
    private rouletteService: RouletteService,
  ) {
    this.choices.push(5);
    this.choices.push(10);
    this.choices.push(15);
  }

  public choiceAmount(amount: number): void {
    this.amount = amount;
  }

  public betOnNumber(enumKey: string): void {
    let number : RouletteNumberEnum = EnumUtils.getEnumByKeys(RouletteNumberEnum, enumKey);
    this.listBet.push(new RouletteBetDTO(this.idTable, this.idUser, this.amount, RouletteTypeBetEnum.NUMBER, number));
    console.log(this.listBet);
  }

  public deleteBet() {
    this.amount = 0;
    this.listBet = [];
  }

  public sendBet(): void {
    this.rouletteService.betOnNumber(this.listBet).subscribe(() => {
      console.log("Bet sent");
    });
    this.amount = 0;
    this.listBet = [];
  }
}
