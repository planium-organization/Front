export class StudentModel {
    public ID : string;
    public Name : string; 
    public Major : string; 
    public SchoolName : string;

    constructor(id : string, name : string, major : string, schoolName : string){
        this.ID = id;
        this.Major = major
        this.Name = name; 
        this.SchoolName = schoolName;
    }
}