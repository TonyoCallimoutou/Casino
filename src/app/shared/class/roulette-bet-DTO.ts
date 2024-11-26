import {RouletteTypeBetEnum} from "../enums/roulette-type-bet-enum";
import {RouletteNumberEnum} from "../enums/roulette-number-enum";

export class RouletteBetDTO {
  tableId: string;
  userId: string;
  amount: number;
  betType: RouletteTypeBetEnum;
  number?: RouletteNumberEnum;

  constructor(
    tableId: string,
    userId: string,
    amount: number,
    betType: RouletteTypeBetEnum,
    number?: RouletteNumberEnum)
  {
    this.tableId = tableId;
    this.userId = userId;
    this.amount = amount;
    this.betType = betType;
    this.number = number;
  }

}
