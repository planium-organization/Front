import { StudentModel } from '../student-list/student.model';

export class ClassModel {
    public Name: string;
    public ID: string;

    constructor(name: string, id: string) {
        this.Name = name;
        this.ID = id;
    }
}
