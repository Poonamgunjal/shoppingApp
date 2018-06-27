import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm,FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';
import {AuthenticateService} from '../authenticate.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



 username = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);



 hide = true;
  matcher = new MyErrorStateMatcher();

 loginForm: FormGroup;
     loading = false;
     submitted = false;
     returnUrl: string;

    constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticateService) { }
ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
}
    // convenience getter for easy access to form fields
    get f() {
    return this.loginForm.controls;
     }

    onSubmit() {
    console.log('hhhhhhhhhhh');
      this.submitted = true;
              this.loading = true;
             this.authService.login(this.f.username.value, this.f.password.value);


    }


}
