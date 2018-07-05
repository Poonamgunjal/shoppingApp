import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import {DataCollectionService} from '../../data-collection.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})

export class CollectionsComponent implements OnInit {

  constructor(private _router: Router, private collectionService: DataCollectionService) {
   }

 public carouselTileItems: any[];
 public phoneTileItems: any[];
 public data: any[];
 public carouselTile: NgxCarousel;
 ngOnInit(){
   this.data=this.collectionService.sendData();
   this.carouselTileItems =this.data['elect'] ;
   this.phoneTileItems =this.data['phone'] ;

    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

//decides how many tiles show on page in carousel as per category
  public carouselTileLoad(evt: any) {
    const len = this.carouselTileItems.length;
    if (len <= 13) {
      for (let i = len; i < len ; i++) {
        this.carouselTileItems.push(i);
      }
    }
    const len1 = this.phoneTileItems.length
      if (len1 <= 13) {
        for (let i = len; i < len ; i++) {
          this.phoneTileItems.push(i);
        }
      }
  }

// to handle component switching on dashboard view
  message: string ="true";
  @Output() messageEvent = new EventEmitter();

  sendMessage(obj) {
    this.messageEvent.emit({obj:obj,msg:this.message});
  }

//when clicking on item product details component navigation handle here
  productView(item){
    this.collectionService.showCategory(item);
    this._router.navigate(['product-details']);
  }

}
