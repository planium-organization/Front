import TimeSpan from 'typescript-dotnet-umd/System/Time/TimeSpan';
import { LessonModel } from '../table/day/card/lesson.model';

export class SendableCard{
    course: LessonModel;
    duration: string;
    startTime: Date;
    dueDate: string;
    description: string;
    studentId: string;
    constructor(
    course: LessonModel,
    duration: string,
    startTime: Date,
    dueDate: Date,
    description: string,
    studentid: string
    )
    {
        this.course = course;
        this.duration = duration;
        this.startTime = startTime;
        this.dueDate = dueDate.getFullYear() + '-' + (dueDate.getMonth() + 1) + '-' + dueDate.getDate();
        // if(description == undefined || description == null)
        // {
        //     console.log(description);
        //     description = " ";
        //     console.log(description);
        // }
        this.description = description;
        this.studentId = studentid;
    }
}