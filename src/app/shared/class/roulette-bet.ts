import {RouletteTypeBetEnum} from "../enums/roulette-type-bet-enum";
import {RouletteNumberEnum} from "../enums/roulette-number-enum";

export class RouletteBet {
  private tableId: string = '';
  private userId: string = '';
  private betNumber: Map<RouletteNumberEnum, number[]> | null = null;
  private betRed: number[] | null = null;
  private betBlack: number[]| null = null;
  private betOdd: number[] | null = null;
  private betEven: number[] | null = null;
  constructor(
  ) {}

  public setBetNumber(number : RouletteNumberEnum  , amount : number): void {
    if (this.betNumber === null) {
      this.betNumber = new Map<RouletteNumberEnum, number[]>();
    }
    if (!this.betNumber.has(number)) {
      this.betNumber.set(number, []);
    }
    this.betNumber.get(number)?.push(amount);
  }

  public setBetRed(amount : number): void {
    if (this.betRed === null) {
      this.betRed = [];
    }
    this.betRed.push(amount);
  }

  public setBetBlack(amount : number): void {
    if (this.betBlack === null) {
      this.betBlack = [];
    }
    this.betBlack.push(amount);
  }

  public setBetOdd(amount : number): void {
    if (this.betOdd === null) {
      this.betOdd = [];
    }
    this.betOdd.push(amount);
  }

  public setBetEven(amount : number): void {
    if (this.betEven === null) {
      this.betEven = [];
    }
    this.betEven.push(amount);
  }

  public clearBet(): void {
    this.betNumber = null;
    this.betRed = null;
    this.betBlack = null;
    this.betOdd = null;
    this.betEven = null;
  }
}
