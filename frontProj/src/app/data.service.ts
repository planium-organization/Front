import { Injectable } from '@angular/core';
import { ClassModel } from './class-list/class.model';
import { StudentModel } from './student-list/student.model';
import { DayModel } from './table/day/day.model';
import { CardModel } from './table/day/card/card.model';
import { Duration } from './Duration';
import { LessonModel } from './table/day/card/lesson.model';

@Injectable()
export class DataService {
    private Classes: ClassModel[] =
    [
        new ClassModel('Class1', '1'),
        new ClassModel('Class2', '2')
    ];

    private Students1: StudentModel[] =
    [
        new StudentModel('1', 'student1', 'mathmatics', 'helli'),
        new StudentModel('2', 'student2', 'mathmatics', 'helli'),
        new StudentModel('3', 'student3', 'mathmatics', 'helli'),
        new StudentModel('4', 'student4', 'mathmatics', 'helli'),
        new StudentModel('5', 'student5', 'mathmatics', 'helli'),
    ];

    private students2: StudentModel[] =
    [
        new StudentModel('6', 'student1', 'Experimental', 'farzanegan'),
        new StudentModel('7', 'student2', 'Experimental', 'farzanegan'),
        new StudentModel('8', 'student3', 'Experimental', 'farzanegan'),
        new StudentModel('9', 'student4', 'Experimental', 'farzanegan'),
        new StudentModel('10', 'student5', 'Experimental', 'farzanegan'),
        new StudentModel('11', 'student6', 'Experimental', 'farzanegan'),
        new StudentModel('12', 'student7', 'Experimental', 'farzanegan'),
    ];

    private Sat = new DayModel(new Date(2019, 5, 28),
    [
        new CardModel(new Duration(1, 0), new LessonModel('#6291E1', 'Math'), 'just the first part', true),
        new CardModel(new Duration(1, 20), new LessonModel('#EB578B', 'physics'), 'just the first part', true),
        new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true),
        new CardModel(new Duration(2, 0), new LessonModel('#5DC878', 'Bialogy'), 'just the first part', false),
    ]);

    private Mon = new DayModel(new Date(2019, 5, 28),
    [
        new CardModel(new Duration(1, 0), new LessonModel('#6291E1', 'Math'), 'just the first part', true),
        new CardModel(new Duration(1, 20), new LessonModel('#EB578B', 'physics'), 'just the first part', true),
        new CardModel(new Duration(2, 0), new LessonModel('#5DC878', 'Bialogy'), 'just the first part', true),
        new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true),
        new CardModel(new Duration(3, 0), new LessonModel('#9E52BF', 'geology'), 'just the first part', true)
    ]);

    private Sun = new DayModel(new Date(2019, 5, 28),
    [
        new CardModel(new Duration(1, 0), new LessonModel('#6291E1', 'Math'), 'just the first part', true),
        new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true),
        new CardModel(new Duration(1, 20), new LessonModel('#EB578B', 'physics'), 'just the first part', true),
        new CardModel(new Duration(3, 0), new LessonModel('#9E52BF', 'geology'), 'just the first part', false),
        new CardModel(new Duration(2, 0), new LessonModel('#5DC878', 'Bialogy'), 'just the first part', false),
    ]);

    private Tue = new DayModel(new Date(2019, 5, 28),
    [
        new CardModel(new Duration(1, 0), new LessonModel('#6291E1', 'Math'), 'just the first part', true),
        new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true),
        new CardModel(new Duration(3, 0), new LessonModel('#9E52BF', 'geology'), 'just the first part', true),
        new CardModel(new Duration(2, 0), new LessonModel('#5DC878', 'Bialogy'), 'just the first part', false),
    ]);

    private Wed = new DayModel(new Date(2019, 5, 28),
    [
        new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true),
        new CardModel(new Duration(1, 20), new LessonModel('#EB578B', 'physics'), 'just the first part', true),
        new CardModel(new Duration(3, 0), new LessonModel('#9E52BF', 'geology'), 'just the first part', true),
        new CardModel(new Duration(2, 0), new LessonModel('#5DC878', 'Bialogy'), 'just the first part', false),
    ]);

    private Thu = new DayModel(new Date(2019, 5, 28),
    [
        new CardModel(new Duration(1, 0), new LessonModel('#6291E1', 'Math'), 'just the first part', true),
        new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true),
        new CardModel(new Duration(3, 0), new LessonModel('#9E52BF', 'geology'), 'just the first part', true),
        new CardModel(new Duration(2, 0), new LessonModel('#5DC878', 'Bialogy'), 'just the first part', false),
    ]);

    private Fri = new DayModel(new Date(2019, 5, 28),
    [
        new CardModel(new Duration(1, 0), new LessonModel('#6291E1', 'Math'), 'just the first part', true),
        new CardModel(new Duration(1, 30), new LessonModel('#FA863D', 'literature'), 'just the first part', true),
        new CardModel(new Duration(1, 20), new LessonModel('#EB578B', 'physics'), 'just the first part', true),
        new CardModel(new Duration(3, 0), new LessonModel('#9E52BF', 'geology'), 'just the first part', true)
    ]);

    private Days = [this.Sat, this.Sun, this.Mon, this.Tue, this.Wed, this.Thu, this.Fri];


    GetClasses() {
        return this.Classes;
    }

    GetStudents(id: string) {
        if (id == '1') {
            return this.Students1;

        }
        // tslint:disable-next-line:one-line
        // tslint:disable-next-line: no-trailing-whitespace
        // tslint:disable-next-line: one-line
        else {
            return this.students2;
        }
    }

    GetCards(id: string) {
        return this.Days;
    }
}
