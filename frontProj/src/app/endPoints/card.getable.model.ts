import TimeSpan from 'typescript-dotnet-umd/System/Time/TimeSpan';
import { LessonModel } from '../table/day/card/lesson.model';

export class GetableCard{
    id: string;
    course: LessonModel;
    duration: string;
    startTime: Date;
    dueDate: Date;
    description: string;
    done: boolean;
    expired: boolean;
    editable: boolean;
    supervisorCreated: boolean;
    constructor(
        id: string,
    course: LessonModel,
    duration: string,
    startTime: Date,
    dueDate: Date,
    description: string,
    done: boolean,
    expired: boolean,
    editable: boolean,
    supervisorCreated: boolean,
    )
    {
        this.id = id;
        this.course = course;
        this.duration = duration;
        this.startTime = startTime;
        this.dueDate = dueDate; 
        this.description = description;
        this.done = done;
        this.expired = expired;
        this.editable = editable;
        this.supervisorCreated = supervisorCreated;
    }
}