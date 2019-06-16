import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardModel } from './table/day/card/card.model';
import { EditableCard } from './endPoints/card.editable.model';
import { GetableCard } from './endPoints/card.getable.model';
import { Duration } from './Duration';
import { SendableCard } from './endPoints/card.sendable.model';

@Injectable()
export class httpService{

    constructor(private http: HttpClient){}


    private cards : CardModel[];

    getCards(id: string): CardModel[]
    {
        
        // this.http.get<GetableCard[]>('http://172.17.3.71:8080/api/supervisor/card/'+ id + '/2018-11-11/2').subscribe(
        this.http.get<GetableCard[]>('http://172.17.3.71:8080/api/student/card/2018-11-11/2').subscribe(
            (r) => 
                {
                    console.log(r);
                    this.cards =  this.getablesToCards(r);
                }
        );
        return this.cards;
    }

    sendCard(id: string, card: CardModel)
    {
        const SCard = this.cardToSendable(card)
        this.http.post<GetableCard>('http://172.17.3.71:8080/api/supervisor/card/'+ id + '/2018-11-11/2', SCard).subscribe(
            (r) => card = this.getableToCard(r)
        );
        return card;
    }

    editCard(id: string, card: CardModel)
    {
        const ECard = this.cardToEditable(card);
        this.http.put<GetableCard>('http://172.17.3.71:8080/api/supervisor/card/'+ id + '/2018-11-11/2', ECard).subscribe(
            (r) => card = this.getableToCard(r)
        );
        return card;
    }

    cardToEditable(card: CardModel)
    {
        const duration : string = card.duration.Hours + ':' + card.duration.Minutes + ':' + 0;
        return new EditableCard(card.lesson, duration, card.startTime, card.description);
    }

    getableToCard(GCard: GetableCard)
    {
        const s = GCard.duration.split(':');
        const card = new CardModel(GCard.id, new Duration(parseInt(s[0]),parseInt(s[1])),
        GCard.course,GCard.description, GCard.done,GCard.supervisorCreated,
        GCard.startTime,GCard.dueDate,GCard.expired,GCard.editable);
        return card;
    }

    getablesToCards(gcards: GetableCard[])
    {
        const cards: CardModel[] = [];
        for(let c of gcards)
        {
            const s = c.duration.split(':');
            cards.push(new CardModel(c.id, new Duration(parseInt(s[0]),parseInt(s[1])),
                c.course,c.description, c.done,c.supervisorCreated,
                c.startTime,c.dueDate,c.expired,c.editable));
        }
        return cards;
    }

    cardToSendable(card: CardModel)
    {
        const duration : string = card.duration.Hours + ':' + card.duration.Minutes + ':' + 0;
        return new SendableCard(card.lesson, duration, card.startTime, card.dueDate, card.description);
    }

}