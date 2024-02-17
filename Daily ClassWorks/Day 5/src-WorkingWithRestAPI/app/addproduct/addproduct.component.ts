import { Component } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private productService: ProductService){
    
  }

  // products:Product=;
  addProduct(data: Product){

    this.productService.insertProduct(data);
    console.log(data.id);
    console.log(data.name);
    console.log(data.price);    
  }
}
