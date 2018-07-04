import { Component, OnInit } from '@angular/core';
import {DataCollectionService} from '../data-collection.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private collectionService: DataCollectionService,private router: Router) { }
public cartItems;

  ngOnInit() {

  console.log();
this.cartItems= this.collectionService.showCart();

  }
 addtoCart() {

   this.router.navigate(['cart']);
  }

  dashboard() {

     this.router.navigate(['dashboard']);
    }

}
