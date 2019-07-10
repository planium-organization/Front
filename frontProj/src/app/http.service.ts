import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardModel } from './table/day/card/card.model';
import { EditableCard } from './endPoints/card.editable.model';
import { GetableCard } from './endPoints/card.getable.model';
import { Duration } from './Duration';
import { SendableCard } from './endPoints/card.sendable.model';
import { CommentModel } from './add-comment-form/comment.model';
import { ClassModel } from './class-list/class.model';

@Injectable()
export class httpService{

    constructor(private http: HttpClient){}


    cards : CardModel[] =[];

    getCards(id: string, date: Date)
    {
        console.log('http://178.63.162.108:8080/api/supervisor/card/'+ id+'/'  + this.dateToString(date) + '/7')
        return this.http.get<GetableCard[]>('http://178.63.162.108:8080/api/supervisor/card/'+ id+'/'  + this.dateToString(date) + '/7')
    }

    

    sendCard(id: string, card: CardModel)
    {
        const SCard = this.cardToSendable(card, id)
        return this.http.post<GetableCard>('http://178.63.162.108:8080/api/supervisor/card', SCard);
    }

    editCard(id: string, card: CardModel)
    {
        const ECard = this.cardToEditable(card);
        return this.http.put<GetableCard>('http://178.63.162.108:8080/api/supervisor/card/'+ id+'/' + card.id, ECard)
    }

    deleteCard(id: string, cardId: string)
    {
        this.http.delete('http://178.63.162.108:8080/api/supervisor/card/'+ id +'/'+ cardId).subscribe(
            (r : Response) => console.log(r)
        );
    }

    getPosts(id:string)
    {
        return this.http.get('http://178.63.162.108:8080/api/supervisor/channelPost/classId/0/10')
    }

    getComments(id: string, date: Date)
    {
        return this.http.get('http://178.63.162.108:8090/api/supervisor/comment/'+ id + '/' + this.dateToString(date)+'/0/10')
    }

    postComment(comment: CommentModel, id: string)
    {
        return this.http.post('http://178.63.162.108:8090/api/supervisor/comment', 
        {
            date: this.dateToString(comment.date),
            text: comment.text,
            studentId: id,
        }
        )
    }



    getClasses()
    {
        return this.http.get('http://178.63.162.108:8080/api/supervisor/schoolClass');
    }

    addClass(classitem: ClassModel)
    {
        return this.http.post('http://178.63.162.108:8080/api/supervisor/schoolClass', {
            name: classitem.name,
            schoolName: classitem.schoolName
        });
    }

    cardToEditable(card: CardModel)
    {
        const duration : string = card.duration.Hours + ':' + card.duration.Minutes + ':' + 0;
        return new EditableCard(card.lesson, duration, card.startTime, card.description);
    }

    getableToCard(GCard: GetableCard)
    {
        const s = GCard.duration.split(':');
        const d = GCard.dueDate.split('-');
        const date = new Date(parseInt(d[0]),parseInt(d[1]) - 1,parseInt(d[2]));
        console.log(date);
        const card = new CardModel(GCard.id, new Duration(parseInt(s[0]),parseInt(s[1])),
        GCard.course,GCard.description, GCard.done,GCard.supervisorCreated,
        GCard.startTime,date,GCard.expired,GCard.editable);
        return card;
    }

    getablesToCards(gcards: GetableCard[])
    {
        const cards: CardModel[] = [];
        for(let c of gcards)
        {
            const d = c.dueDate.split('-');
            const date = new Date(parseInt(d[0]),parseInt(d[1]) - 1,parseInt(d[2]));
            const s = c.duration.split(':');
            cards.push(new CardModel(c.id, new Duration(parseInt(s[0]),parseInt(s[1])),
                c.course,c.description, c.done,c.supervisorCreated,
                c.startTime,date,c.expired,c.editable));
        }
        return cards;
    }

    cardToSendable(card: CardModel , id: string)
    {
        const duration : string = card.duration.Hours + ':' + card.duration.Minutes + ':' + 0;
        return new SendableCard(card.lesson, duration, card.startTime, card.dueDate, card.description, id);
    }

    dateToString(date: Date)
    {
        const dateString : string = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        return dateString;
    }
}