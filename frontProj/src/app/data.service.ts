import { Injectable, EventEmitter } from '@angular/core';

import { ClassModel } from './class-list/class.model';
import { StudentModel } from './student-list/student.model';
import { DayModel } from './table/day/day.model';
import { CardModel } from './table/day/card/card.model';
import { Duration } from './Duration';
import { LessonModel } from './table/day/card/lesson.model';
import { httpService } from './http.service';

@Injectable()
export class DataService {
    classSelected = new EventEmitter<string>();
    studentSelected = new EventEmitter<{classId: string ,studentId: string}>(true)
    addCardSelected = new EventEmitter<{classId: string, studentId: string, date: Date}>();
    cardAdded =  new EventEmitter<CardModel>();
    cardEditted = new EventEmitter<CardModel>();
    cardSelected = new EventEmitter<{classId: string, studentId: string, card: CardModel}>();


    daySelected = new EventEmitter<Date>();

    private date: Date;
    
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

    private Sat = new DayModel(new Date(2019, 6, 1),
    [
        new CardModel('1',new Duration(1, 0), new LessonModel('#6291E1', 'Math'), 'just the first part', true,true,new Date(2018,11,11,13,30),new Date(2018,11,11),false,false),
        new CardModel('2',new Duration(1, 20), new LessonModel('#EB578B', 'physics'), 'just the first part', true,true,new Date(2018,11,11,13,30),new Date(2018,11,11),false,false),
        new CardModel('3',new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true,true,new Date(2018,11,11,13,30),new Date(2018,11,11),false,false),
        new CardModel('4',new Duration(2, 0), new LessonModel('#5DC878', 'Bialogy'), 'just the first part', false,true,new Date(2018,11,11,13,30),new Date(2018,11,11),true,false),
    ]);

    private Mon = new DayModel(new Date(2019, 6, 2),
    [
        new CardModel('5',new Duration(1, 0), new LessonModel('#6291E1', 'Math'), 'just the first part', true,true,new Date(2018,11,11,13,30),new Date(2018,11,11),false,false),
        // new CardModel(new Duration(1, 20), new LessonModel('#EB578B', 'physics'), 'just the first part', true,true,new Date(2018,11,11,13,30),new Date(2018,11,11),false,false),
        // new CardModel(new Duration(2, 0), new LessonModel('#5DC878', 'Bialogy'), 'just the first part', true,true,new Date(2018,11,11,13,30),new Date(2018,11,11),false,false),
        // new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true,true,new Date(2018,11,11,13,30),new Date(2018,11,11),false,false),
        // new CardModel(new Duration(3, 0), new LessonModel('#9E52BF', 'geology'), 'just the first part', true,true,new Date(2018,11,11,13,30),new Date(2018,11,11),false,false)
    ]);

    private Sun = new DayModel(new Date(2019, 6, 3),
    [
        // new CardModel(new Duration(1, 0), new LessonModel('#6291E1', 'Math'), 'just the first part', true),
        // new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true),
        // new CardModel(new Duration(1, 20), new LessonModel('#EB578B', 'physics'), 'just the first part', true),
        // new CardModel(new Duration(3, 0), new LessonModel('#9E52BF', 'geology'), 'just the first part', false,true),
        // new CardModel(new Duration(2, 0), new LessonModel('#5DC878', 'Bialogy'), 'just the first part', false),
    ]);

    private Tue = new DayModel(new Date(2019, 6, 4),
    [
        // new CardModel(new Duration(1, 0), new LessonModel('#6291E1', 'Math'), 'just the first part', true),
        // new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true),
        // new CardModel(new Duration(3, 0), new LessonModel('#9E52BF', 'geology'), 'just the first part', true),
        // new CardModel(new Duration(2, 0), new LessonModel('#5DC878', 'Bialogy'), 'just the first part', false,true),
    ]);

    private Wed = new DayModel(new Date(2019, 6, 5),
    [
        // new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true),
        // new CardModel(new Duration(1, 20), new LessonModel('#EB578B', 'physics'), 'just the first part', true),
        // new CardModel(new Duration(3, 0), new LessonModel('#9E52BF', 'geology'), 'just the first part', true,true),
        // new CardModel(new Duration(2, 0), new LessonModel('#5DC878', 'Bialogy'), 'just the first part', false, true),
    ]);

    private Thu = new DayModel(new Date(2019, 6, 6),
    [
        // new CardModel(new Duration(1, 0), new LessonModel('#6291E1', 'Math'), 'just the first part', true),
        // new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true),
        // new CardModel(new Duration(3, 0), new LessonModel('#9E52BF', 'geology'), 'just the first part', true),
        // new CardModel(new Duration(2, 0), new LessonModel('#5DC878', 'Bialogy'), 'just the first part', false),
    ]);

    private Fri = new DayModel(new Date(2019, 6, 7),
    [
        // new CardModel(new Duration(1, 0), new LessonModel('#6291E1', 'Math'), 'just the first part', true,true),
        // new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true),
        // new CardModel(new Duration(1, 20), new LessonModel('#EB578B', 'physics'), 'just the first part', true),
        // new CardModel(new Duration(3, 0), new LessonModel('#9E52BF', 'geology'), 'just the first part', true, true)
    ]);

    private Days = [this.Sat, this.Sun, this.Mon, this.Tue, this.Wed, this.Thu, this.Fri];



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

    initTable(id: string) 
    {
        console.log('init called '+ id);
        //this.Tue.cards = this.http.getCards('bbbb2222-1111-1111-1111-111111111111');
        return this.Days.slice();
    }
    
    getWeek(week : number){
        const day =  this.date.getDay();
        const d = Date.now() + ((7  * week - day)* 86400000);
        this.date = new Date(d);
        return this.Days.slice();
    }

    addCard(card :CardModel, date : Date)
    {
        for(let day of this.Days)
        {
            if(day.date == date)
            {
                day.cards.push(card);
            }
        }
    }
}
