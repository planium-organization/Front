import { LessonModel } from '../table/day/card/lesson.model';
import TimeSpan from 'typescript-dotnet-umd/System/Time/TimeSpan';

export class EditableCard{
    course: LessonModel;
    duration: TimeSpan;
    startTime: Date;
    description: string;
    constructor(
    course: LessonModel,
    duration: TimeSpan,
    startTime: Date,
    description: string,
    )
    {
        this.course = course;
        this.duration = duration;
        this.startTime = startTime;
        this.description = description;
    }
}