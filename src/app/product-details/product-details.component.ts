import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {DataCollectionService} from '../data-collection.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router: Router,private collectionService: DataCollectionService) { }
public prod;
private goCart: boolean=false;
  ngOnInit() {
  this.prod= this.collectionService.sendProduct();
  }

  ngDoCheck(){

    }

  addItemToCart(prod){
    this.goCart=true;
  this.collectionService.addToCart(prod);
  }

  addtoCart() {
   this.router.navigate(['cart']);
  }

  dashboard() {
     this.router.navigate(['dashboard']);
    }

    goToCart(){

       this.router.navigate(['cart']);
    }
}
