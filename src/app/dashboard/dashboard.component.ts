import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
private showCategory: boolean=false;
   public dataCollection:string;
  constructor(private router: Router) { }
ngOnInit() {

  }

ngDoCheck(){

  }

  showCategories($event) {
    this.showCategory = $event.msg;
    this.dataCollection = $event.obj;
    console.log('this.message',this.showCategory,$event.obj);
  }


 addtoCart() {

   this.router.navigate(['cart']);
  }

  dashboard() {
this.showCategory=false;
     this.router.navigate(['/dashboard']);
         console.log('method route');

    }
}
