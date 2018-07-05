import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {

 constructor(private http: HttpClient, private _router: Router) {
 }

  resData=JSON.parse(localStorage.getItem('resData'));;
  selectedProduct;
  addProduct: any[]=new Array();

//for getting collection data category wise in json format
 getData() {
   const url = 'http://localhost:3000/get-data';
   this.http.post<any>(url,'')
   .subscribe((res) => {
    if(res){
     console.log("hello",res);
     this.resData=res;
    }

   });
 }

//to return json data to collection component
  sendData() {
   localStorage.setItem('resData',JSON.stringify(this.resData));
   return this.resData;
  }

//to save the selected product info
  showCategory(item){
   this.selectedProduct=item;
   }

//returns all selected product
   sendProduct(){
    return this.selectedProduct;
   }

//save the selected data to cart
    addToCart(item){
      let flag=false;
      for(let i=0;i<this.addProduct.length;i++){
         if(this.addProduct[i].img==item.img){
           flag=true;
         }
      }
      if(flag==false){
        this.addProduct.push(item);
      }

    }

//returns all added products in cart
     showCart(){
       return this.addProduct;
     }


}
