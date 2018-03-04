import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class DataService{

    constructor(public http:Http) {}
    
    // Get local file
    // @return JSON

    public getJSON(): Observable<any> {
         return this.http.get("assets/local-files/generated.json")
                         .map((res:any) => res.json());

     }
}