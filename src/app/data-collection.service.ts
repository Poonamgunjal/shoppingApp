import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {

 constructor(private http: HttpClient, private _router: Router) { }

  resData;

 getData() {
        console.log('getData');
           const url = 'http://localhost:3000/get-data';

           this.http.post<any>(url)
               .subscribe((res) => {
               if(res){
                console.log("hello",res);
                 this.resData=res;
                 console.log("hellothis.resData",this.resData);
               }

               });
       }

sendData() {
         console.log("hello",this.resData);
         return this.resData;
             }
}
