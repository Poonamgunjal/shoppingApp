import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {

 constructor(private http: HttpClient, private _router: Router) { }

  resData;
  selectedProduct;
  addProduct: any[]=new Array();

 getData() {
        console.log('getData');
           const url = 'http://localhost:3000/get-data';
           this.http.post<any>(url,'')
               .subscribe((res) => {
               if(res){
                console.log("hello",res);
                 this.resData=res;
                 console.log("hellothis.resData",this.resData);
               }

               });
       }

sendData() {
         console.log("hello",this.resData);
         return this.resData;
             }

            showCategory(item){
              this.selectedProduct=item;
              console.log('showCategory(item)',item,this.selectedProduct);

            }

            sendProduct(){
             return this.selectedProduct;
            }

             addToCart(item){
             let flag=false;
             console.log('item addToCart',item,this.addProduct.length);
                    for(let i=0;i<this.addProduct.length;i++){
                    if(this.addProduct[i].img==item.img){
                       flag=true;
                    }
                    }
                    if(flag==false){
                     this.addProduct.push(item);
                     console.log('addToCart(item)',item, this.addProduct);
                    }

                        }

                        showCart(){
                        return this.addProduct;
                        }
}
