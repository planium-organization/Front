import {CardModel} from './card/card.model';
export class DayModel {
    public date: Date;
    public cards: CardModel[];

    constructor(date: Date, cards: CardModel[]) {
        this.date = date;
        this.cards = cards;
    }
}
