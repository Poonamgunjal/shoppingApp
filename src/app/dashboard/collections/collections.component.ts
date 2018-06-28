import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  constructor() { }


 public carouselTileItems: Array<any>;
 public phoneTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  ngOnInit(){
    this.carouselTileItems = [
    {name:'a',img:'el-1.jpg'},
    {name:'a',img:'el-2.jpg'},
    {name:'a',img:'el-3.jpg'},
    {name:'a',img:'el-4.jpg'},
    {name:'a',img:'el-5.jpg'},
    {name:'a',img:'el-6.jpeg'},
    {name:'a',img:'el-7.jpg'},
    {name:'a',img:'el-8.jpeg'},
    {name:'a',img:'el-9.jpg'},
    {name:'a',img:'el-11.jpg'},
    {name:'a',img:'el-12.jpg'},
    {name:'a',img:'el-13.jpg'}
    ];

this.phoneTileItems = [
    {name:'a',img:'ph-1.jpg'},
    {name:'a',img:'ph-2.jpg'},
    {name:'a',img:'ph-3.jpg'},
    {name:'a',img:'ph-4.png'},
    {name:'a',img:'ph-5.jpg'},
    {name:'a',img:'ph-6.jpg'},
    {name:'a',img:'ph-7.jpg'},
    {name:'a',img:'ph-8.jpg'},
    {name:'a',img:'ph-9.jpg'},
    {name:'a',img:'ph-10.jpg'},
    {name:'a',img:'ph-11.jpeg'},
    {name:'a',img:'ph-12.png'}
    ];

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

    @Output() messageEvent = new EventEmitter<string>();

    sendMessage() {
        this.messageEvent.emit(this.message);
      }
}
