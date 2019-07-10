export class CommentModel{
    id: string;
    date: Date;
    creationTime: Date
    text: string;
    
    constructor(id: string, date: Date, creationTime: Date, text: string)
    {
        this.id = id;
        this.date= date;
        this.creationTime = creationTime;
        this.text = text;
    }
}