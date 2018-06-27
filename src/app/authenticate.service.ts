import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import {Router} from '@angular/router';
@Injectable()
export class AuthenticateService {

    constructor(private http: HttpClient, private _router: Router) { }


    login(username , password) {

          const url = 'http://localhost:3000/login-data';
          const obj = {
            name: username,
            pass: password
          };
          this.http.post<any>(url, obj)
              .subscribe((res) => {
              if(res === 200){
               console.log("hello",res);
                this._router.navigate(['dashboard']);
              }

              });
      }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
