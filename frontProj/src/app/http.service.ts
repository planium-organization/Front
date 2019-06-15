import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class httpService{
    constructor()
    constructor(private http?: HttpClient){}

    getCards(id: string){
        return this.http.get('http://172.17.3.71:8080/api/supervisor/card/'+ id + '/2018-11-11/2').subscribe(
            r => console.log(r)
        );

        // const req = new HttpRequest('GET', 'http://172.17.3.71:8080/api/supervisor/${id}/cards/2018-11-11/2' ,
        //  {reportProgress : true});
        //  this.http.request(req).subscribe(
        //      r => console.log(r)
        //  );
    }
}