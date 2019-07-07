import { Injectable, EventEmitter } from '@angular/core';

import { ClassModel } from './class-list/class.model';
import { StudentModel } from './student-list/student.model';
import { DayModel } from './table/day/day.model';
import { CardModel } from './table/day/card/card.model';
import { Duration } from './Duration';
import { LessonModel } from './table/day/card/lesson.model';
import { httpService } from './http.service';
import { pipe, Observable, Observer } from 'rxjs';
import { findSafariExecutable } from 'selenium-webdriver/safari';
import { GetableCard } from './endPoints/card.getable.model';
import { error } from '@angular/compiler/src/util';
import { PostModel } from './post-page/post.model';

@Injectable()
export class DataService {

    classSelected = new EventEmitter<StudentModel[]>();
   
    ClassId : string;
    StudentId: string;
    date: Date;
    selectedCard: CardModel;

    daySelected = new EventEmitter<Date>();


    constructor(private http : httpService)
    {}

    private Students1: StudentModel[] =
    [
        new StudentModel('bbbb2222-1111-1111-1111-111111111111', 'Oliver Roberts', 'mathmatics', 'helli'),
        new StudentModel('2', 'Jack Roy', 'mathmatics', 'helli'),
        new StudentModel('3', 'Harry Williams', 'mathmatics', 'helli'),
        new StudentModel('4', 'Jacob Thomas', 'mathmatics', 'helli'),
        new StudentModel('5', 'Charlie Lam', 'mathmatics', 'helli'),
    ];

    private students2: StudentModel[] =
    [
        new StudentModel('6', 'Emma Smith', 'Experimental', 'farzanegan'),
        new StudentModel('7', 'Olivia Wilson', 'Experimental', 'farzanegan'),
        new StudentModel('8', 'Emily Taylor', 'Experimental', 'farzanegan'),
        new StudentModel('9', 'Linda Jones', 'Experimental', 'farzanegan'),
        new StudentModel('10', 'Victoria Brown', 'Experimental', 'farzanegan'),
        new StudentModel('11', 'Sophie Miller', 'Experimental', 'farzanegan'),
        new StudentModel('12', 'Jessica Taylor', 'Experimental', 'farzanegan'),
    ];

    private Classes: ClassModel[] =
    [
        new ClassModel('4th grade math', "1"),
        new ClassModel('1st grade', "2")
    ];

     courses: LessonModel[] = [
        new LessonModel('#6291E1', 'Math'),
        new LessonModel('#EB578B', 'physics'),
        new LessonModel('#FA863D', 'literature'),
        new LessonModel('#5DC878', 'Bialogy'),
        new LessonModel('#f44141', 'Theology'),
      ];

    private Sat = new DayModel(new Date(2019, 6, 1),
    []);

    private Sun = new DayModel(new Date(2019, 6, 2),
    []);

    private Mon = new DayModel(new Date(2019, 6, 3),
    []);

    private Tue = new DayModel(new Date(2019, 6, 4),
    []);

    private Wed = new DayModel(new Date(2019, 6, 5),
    []);

    private Thu = new DayModel(new Date(2019, 6, 6),
    []);

    private Fri = new DayModel(new Date(2019, 6, 7),
    []);

    Days = [ this.Sun, this.Mon, this.Tue, this.Wed, this.Thu, this.Fri,this.Sat,];

    Posts = [
        new PostModel('1',new Date(2019,6,7,14,23), 'this is a test for the posts1',null),
        new PostModel('1',new Date(2019,6,6,16,20), 'this is a test for the posts2',null),
        new PostModel('1',new Date(2019,6,5,13,3), 'this is a test for the posts3',null),
    ];

    GetClasses()
    {
        
        return this.Classes.slice();
    }

    GetStudents(id: string): StudentModel[]
    {
        if (id == '1')
        {
            console.log('1');
            return this.Students1.slice();
        }
        else
        {
            console.log(id);
            return this.students2.slice();
        }
    }

    initDays(){
        let today = new Date(Date.now());
        const day =  today.getDay();
        const d = Date.now()  - day * 86400000;
        let firsofweek = new Date(d);
        this.Sun.date = firsofweek;
        this.Sun.cards = [];
        this.Mon.date = new Date(d + 86400000);
        this.Mon.cards = [];
        this.Tue.date = new Date(d + 2*86400000 );
        this.Tue.cards = [];
        this.Wed.date = new Date(d + 3*86400000 );
        this.Wed.cards = [];
        this.Thu.date = new Date(d + 4*86400000 );
        this.Thu.cards = [];
        this.Fri.date = new Date(d + 5*86400000 );
        this.Fri.cards = [];
        this.Sat.date = new Date(d + 6*86400000 );
        this.Sat.cards = [];

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

    
    initTable(id: string)
    {
        this.initDays();
        let today = new Date(Date.now());
        const day =  today.getDay();
        const d = Date.now()  - day * 86400000;
        let cards = this.http.getCards('bbbb2222-1111-1111-1111-111111111111',new Date(d));
        cards.subscribe(
            (Gcards : GetableCard[]) =>
            {
                console.log(Gcards);
                for(let Gcard of Gcards)
                {
                    let card = this.getableToCard(Gcard);
                    let day = card.dueDate.getDay()
                    if(day == 0)
                    {
                        console.log(card.dueDate)
                        this.Sun.cards.push(card);
                    }
                    else if(day == 1)
                    {
                        console.log(this.Mon.date)
                        this.Mon.cards.push(card);
                    }
                    else if(day == 2)
                    {
                        console.log(day)
                        this.Tue.cards.push(card);
                    }
                    else if(day == 3)
                    {
                        console.log(day)
                        this.Wed.cards.push(card);
                    }
                    else if(day == 4)
                    {
                        console.log(day)
                        this.Thu.cards.push(card);
                    }
                    else if(day == 5)
                    {
                        console.log(day)
                        this.Fri.cards.push(card);
                    }
                    else if(day == 6)
                    {
                        console.log(day)
                        this.Sat.cards.push(card);
                    }
                
                }
                console.log('init called '+ id);
                this.Days = [ this.Sun, this.Mon, this.Tue, this.Wed, this.Thu, this.Fri,this.Sat];
                console.log(this.Days);
            },
            (error) => {
                console.log(error);
            }
        );
        
       
    }

    getWeek(week : number){
        let today = new Date(Date.now());
        const day =  today.getDay();
        const d = Date.now() + ((7  * week - day)* 86400000);
        let firsofweek = new Date(d);
        this.http.getCards(this.StudentId, firsofweek);
        return this.Days.slice();
    }

    addCard(card :CardModel)
    {
        this.http.sendCard(this.StudentId, card);
        let day = card.dueDate.getDay();
        console.log(day);
        if(day == 0)
        {
            console.log(day)
            this.Sun.cards.push(card);
        }
        else if(day == 1)
        {
            console.log(day)
            this.Mon.cards.push(card);
        }
        else if(day == 2)
        {
            console.log(day)
            this.Tue.cards.push(card);
        }
        else if(day == 3)
        {
            console.log(day)
            this.Wed.cards.push(card);
        }
        else if(day == 4)
        {
            console.log(day)
            this.Thu.cards.push(card);
        }
        else if(day == 5)
        {
            console.log(day)
            this.Fri.cards.push(card);
        }
        else if(day == 6)
        {
            console.log(day)
            this.Sat.cards.push(card);
        }
    }

    editCard(card: CardModel)
    {
        card = this.http.editCard(this.StudentId, card);
        for(let d of this.Days)
        {
            if(card.dueDate == d.date)
            {
                for(let c of d.cards)
                {
                    if(c.id == card.id)
                    {
                        c = card;
                    }
                }
            }
        }
    }

    deleteCard(id: string)
    {
        this.http.deleteCard(this.StudentId, id);
    }

    getPosts()
    {
        this.http.getPosts(this.ClassId).subscribe(
            (r: PostModel[]) => {this.Posts = r;
                console.log(r);
            }
        );
        
    }
}
