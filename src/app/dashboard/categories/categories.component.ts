import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import {DataCollectionService} from '../../data-collection.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private _router: Router,private collectionService: DataCollectionService) { }

  public phoneTileItems: Array<any>;
  public collection: Array<any>;
  @Input() selectedCategory: Array<any>;
  private pay: boolean=false;

  ngOnInit() {
    this.phoneTileItems =this.selectedCategory;
    this.collection = [];
    for (let i = 1; i <this.phoneTileItems.length; i++) {
      this.collection.push(this.phoneTileItems[i]);
    }
  }
toggle = {};
//to navigate to product details page
  productDetails(item){
    this.collectionService.showCategory(item);
    this._router.navigate(['product-details']);
  }

  ngDoCheck(){

  }

//selected items get added into cart
  addItemToCart(item,x){
  console.log('x',x);
    this.pay=true;
    this.collectionService.addToCart(item);
  }

 }


