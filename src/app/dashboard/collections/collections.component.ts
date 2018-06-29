import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import {DataCollectionService} from '../../data-collection.service';


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  constructor(private collectionService: DataCollectionService) { }


 public carouselTileItems: Array<any>;
 public phoneTileItems: Array<any>;
 public data: Array<any>;
  public carouselTile: NgxCarousel;

  ngOnInit(){

   this.data=this.collectionService.sendData();


    this.carouselTileItems =this.data.elect ;
    this.phoneTileItems =this.data.phone ;

console.log('data',this.carouselTileItems,this.phoneTileItems);


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

  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length
    if (len <= 13) {
      for (let i = len; i < len ; i++) {
        this.carouselTileItems.push(i);
        console.log(this.carouselTileItems);
      }
    }
const len1 = this.phoneTileItems.length
    if (len1 <= 13) {
      for (let i = len; i < len ; i++) {
        this.phoneTileItems.push(i);
        console.log(this.phoneTileItems);
      }
    }
  }

  message: string ="true";

    @Output() messageEvent = new EventEmitter();

    sendMessage(obj) {

    console.log('obj',obj);
        this.messageEvent.emit({obj:obj,msg:this.message});
      }


}
