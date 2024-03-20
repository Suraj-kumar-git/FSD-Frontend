import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productList: Product[] = [];
  
  constructor(private productService:ProductService){

  }

  getAllProducts(){
    this.productService.getAll().subscribe((products)=>{this.productList=products
    console.log(products)});
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id);
  }
}
