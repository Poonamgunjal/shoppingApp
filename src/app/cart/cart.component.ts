import { Component, OnInit } from '@angular/core';
import {DataCollectionService} from '../data-collection.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private collectionService: DataCollectionService,private router: Router) {
   }
  public cartItems;

  ngOnInit() {
    this.cartItems= this.collectionService.showCart();
  }

  //to navigate to cart page
  goToCart() {
   this.router.navigate(['cart']);
  }

 // to navigate to dashboard view
  dashboard() {
    this.router.navigate(['dashboard']);
  }

}
