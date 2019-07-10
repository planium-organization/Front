import { LessonModel } from '../table/day/card/lesson.model';

export class EditableCard{
    course: LessonModel;
    duration: string;
    startTime: Date;
    description: string;
    constructor(
    course: LessonModel,
    duration: string,
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