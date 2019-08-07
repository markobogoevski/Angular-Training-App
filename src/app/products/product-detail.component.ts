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
    this.productService.getProduct(id)
    .subscribe(
     prod=>this.product=prod,
     err=>this.errorMessage=err
    );
    this.pageTitle+=`: ${id}`;
  }

  onBack():void{
    this.router.navigate(['/products']);
  }

}
