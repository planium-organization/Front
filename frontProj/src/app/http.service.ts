import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardModel } from './table/day/card/card.model';
import TimeSpan from 'typescript-dotnet-umd/System/Time/TimeSpan';
import { EditableCard } from './endPoints/card.editable.model';
import { GetableCard } from './endPoints/card.getable.model';
import { Duration } from './Duration';
import { variable } from '@angular/compiler/src/output/output_ast';
import { SendableCard } from './endPoints/card.sendable.model';

@Injectable()
export class httpService{

    constructor(private http: HttpClient){}


    private cards : CardModel[];

    getCards(id: string): CardModel[]
    {
        
        // this.http.get<GetableCard[]>('http://172.17.3.71:8080/api/supervisor/card/'+ id + '/2018-11-11/2').subscribe(
            this.http.get<GetableCard[]>('http://172.17.3.71:8080/api/student/card/2018-11-11/2').subscribe(
            (r) => {console.log(r);
                this.cards =  this.getableToCard(r);
            }
        );
        return this.cards;
    }


    // cardToEditable(card: CardModel)
    // {
    //     const time = new TimeSpan((card.duration.Hours*60 + card.duration.Minutes)* 60000);
    //     return new EditableCard(card.lesson, time,card.startTime, card.description);
    // }

    getableToCard(gcards: GetableCard[])
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

    // cardToSendable(card: CardModel)
    // {
    //     const time = new TimeSpan((card.duration.Hours*60 + card.duration.Minutes)* 60000);
    //     return new SendableCard(card.lesson, time, card.startTime, card.dueDate, card.description);
    // }

}