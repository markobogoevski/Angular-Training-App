import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product-factory-service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private pageTitle:string='Product Detail';
  private product:IProduct;
  private errorMessage:string;

  constructor(private route:ActivatedRoute,private productService:ProductService,
    private router:Router) { 
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    //this.productService.getProduct(id)
    //.subscribe(
    //  prod=>this.product=prod,
    //  err=>this.errorMessage=err
    //);
    this.pageTitle+=`: ${id}`;
    this.product={
      productId:id,
      productName:'Leaf Rake',
      productCode:'GDN-0011',
      releaseDate:'March 19, 2016',
      description:'Leaf rake with 48-inch wooden handle.',
      price:19.95,
      starRating:3.2,
      imageUrl:"https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }

  }

  onBack():void{
    this.router.navigate(['/products']);
  }

}
