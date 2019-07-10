export class PostModel{
    id: string;
    creationTime: Date;
    text: string;
    image: string;
    
    constructor(id: string, creationTime: Date, text: string, image: string){
        this.id = id;
        this.creationTime = creationTime;
        this.text = text;
        this.image = image;
    }
}