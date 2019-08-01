import {Component, OnInit} from '@angular/core'
import { IProduct } from './product';
import { ProductService } from './product-factory-service';

@Component({
    selector:"product-list-component",
    templateUrl:"./product-list-component.html"
})

export class ProductListComponent implements OnInit{
  
    TitlePage:string = "Product List"
    imageWidth:number = 50;
    imageMargin:number = 2;
    showingImages:boolean = false; 
    listFilter:string;
    Products:IProduct[];

    constructor(private productFactory:ProductService){
      this.listFilter='cart';
    }

    toggleImages():void{
        this.showingImages=!this.showingImages;
    }

    getFilteredProducts():IProduct[]{
      return this.Products.filter(p=>
        p.productName.toLocaleLowerCase().includes(this.listFilter.toLocaleLowerCase()));
    }

    onStarsClicked(rating:number):void{
      this.TitlePage="Product List: "+rating;
    }

    ngOnInit(): void {
      this.Products=this.productFactory.getProducts();
    }
}