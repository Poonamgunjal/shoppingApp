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

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  ngDoCheck(){

  }

//to show category component when view all is clicked
  showCategories($event) {
    this.showCategory = $event.msg;
    this.dataCollection = $event.obj;
  }

//for navigate to cart
  goToCart() {
   this.router.navigate(['cart']);
  }

//for dashboard navigate
  dashboard() {
     this.showCategory=false;
     this.router.navigate(['/dashboard']);
  }

}
