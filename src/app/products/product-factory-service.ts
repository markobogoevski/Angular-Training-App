import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError,tap,filter,map} from "rxjs/operators";

@Injectable({
    providedIn:'root'
})
export class ProductService{

    constructor(private webClient:HttpClient){}
    private productUrl:string="api/products/products.json";

    getProducts():Observable<IProduct[]>{
      return this.webClient.get<IProduct[]>(this.productUrl)
      .pipe(
        tap(data=>console.log('All: '+JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    getProduct(productId:number):Observable<IProduct>{
      return this.getProducts().pipe(
        map((data:IProduct[])=>data.find(p=>p.productId==productId)));
    }

    private handleError(err:HttpErrorResponse){
      let errorMessage='';
      if(err.error instanceof ErrorEvent){
        errorMessage=`An error occured: ${err.error.message}`;
      }else{
        errorMessage=`Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}