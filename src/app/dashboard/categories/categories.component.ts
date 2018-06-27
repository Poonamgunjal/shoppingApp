import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

    this.phoneTileItems = [
        {name:'a',img:'ph-1.jpg'},
        {name:'a',img:'ph-2.jpg'},
        {name:'a',img:'ph-3.jpg'},
        {name:'a',img:'ph-1.jpg'},
        {name:'a',img:'ph-5.jpg'},
        {name:'a',img:'ph-6.jpg'},
        {name:'a',img:'ph-7.jpg'},
        {name:'a',img:'ph-1.jpg'},
        {name:'a',img:'ph-2.jpg'},
        {name:'a',img:'ph-1.jpg'},
        {name:'a',img:'ph-1.jpg'},
        {name:'a',img:'ph-5.jpg'},
        {name:'a',img:'ph-5.jpg'},
        {name:'a',img:'ph-1.jpg'},
        {name:'a',img:'ph-1.jpg'},
        {name:'a',img:'ph-1.jpg'},
        {name:'a',img:'ph-1.jpg'},
        {name:'a',img:'ph-1.jpg'},
        {name:'a',img:'ph-1.jpg'},
        {name:'a',img:'ph-1.jpg'}
        ];
        this.collection = [];
     for (let i = 1; i <this.phoneTileItems.length; i++) {
          this.collection.push(this.phoneTileItems[i]);
        }
    }

    productDetails(){
      this._router.navigate(['product-details']);
    }


}
