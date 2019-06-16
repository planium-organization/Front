import TimeSpan from 'typescript-dotnet-umd/System/Time/TimeSpan';
import { LessonModel } from '../table/day/card/lesson.model';

export class SendableCard{
    course: LessonModel;
    duration: string;
    startTime: Date;
    dueDate: Date;
    description: string;
    constructor(
    course: LessonModel,
    duration: string,
    startTime: Date,
    dueDate: Date,
    description: string,
    )
    {
        this.course = course;
        this.duration = duration;
        this.startTime = startTime;
        this.dueDate = dueDate; 
        this.description = description;
    }
}