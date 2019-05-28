import { Duration } from "../../../Duration"
import { LessonModel } from "./lesson.model"
export class CardModel 
{
    public duration : Duration;
    public lesson : LessonModel;
    public description : string;
    public status : boolean;

    constructor(duration : Duration, lesson : LessonModel, description : string, status : boolean)
    {
        this.description = description;
        this.duration = duration;
        this.lesson = lesson;
        this.status = status;
    }
}