import { StudentModel } from '../student-list/student.model';

export class ClassModel {
    id: string;
    name: string;
    schoolName: string;
    token: string;

    constructor(name: string, id: string, token: string, schoolName: string)
    {
        this.name = name;
        this.id = id;
        this.token = token;
        this.schoolName = schoolName;
    }
}
