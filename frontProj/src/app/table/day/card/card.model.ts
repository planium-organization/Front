import { Duration } from '../../../Duration';
import { LessonModel } from './lesson.model';
export class CardModel {
    id: string;
    duration: Duration;
    lesson: LessonModel;
    description: string;
    isDone: boolean;
    supervisorCreated: boolean;
    startTime: Date;
    dueDate: Date;
    expired: boolean;
    editable: boolean;

    constructor(
        id: string,
        duration: Duration,
        lesson: LessonModel,
        description: string,
        isDone: boolean,
        supervisorCreated: boolean,
        startTime: Date,
        dueDate: Date,
        expired: boolean,
        editable: boolean,) 
    {
        this.id = id;
        this.description = description;
        this.duration = duration;
        this.lesson = lesson;
        this.isDone = isDone;
        this.supervisorCreated = supervisorCreated;
        this.startTime = startTime;
        this.dueDate = dueDate;
        this.expired = expired;
        this.editable = editable;
    }
}
