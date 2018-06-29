import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router) { }
ngOnInit() {
  }
 showCategory:string;
 dataCollection:string;

  showCategories($event) {
    this.showCategory = $event.msg;
    this.dataCollection = $event.obj;
    console.log('this.message',this.showCategory,$event.obj);
  }

  dashboard(){
   this._router.navigate(['dashboard']);
  }


}
