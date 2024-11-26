import {GameEnum} from "../enums/game-enum";

export class TableModel {
  id: string;
  type: GameEnum;

  constructor(id: string, name: string, type: GameEnum) {
    this.id = id;
    this.type = type;
  }
}
