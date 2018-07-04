import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticateService {

constructor(private http: HttpClient, private _router: Router) {
}

//for login user authentication purpose
login(username , password) {
   const url = 'http://localhost:3000/login-data';
   const obj = {
      name: username,
      pass: password
   };
   this.http.post<any>(url, obj)
   .subscribe((res) => {
       if(res === 200){
         this._router.navigate(['dashboard']);
       }

    });
 }

}
