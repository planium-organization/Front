import { Duration } from '../../../Duration';
import { LessonModel } from './lesson.model';
export class CardModel {
    public duration: Duration;
    public lesson: LessonModel;
    public description: string;
    public isDone: boolean;
    public supervisorCreated: boolean;

    constructor(duration: Duration, 
        lesson: LessonModel, 
        description: string, 
        isDone: boolean,
        supervisorCreated : boolean = false) 
    {
        this.description = description;
        this.duration = duration;
        this.lesson = lesson;
        this.isDone = isDone;
        this.supervisorCreated = supervisorCreated;
    }
}
