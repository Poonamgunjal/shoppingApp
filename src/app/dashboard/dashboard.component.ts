import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
ngOnInit() {
  }
 showCategory:string;

  showCategories($event) {
    this.showCategory = $event;
    console.log('this.message',this.showCategory);
  }


}
