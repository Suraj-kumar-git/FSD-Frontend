import { Component } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  product!:Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.route.params.subscribe(params => {
      this.product.id =params['id'];
      this.product.name =params['name'];
      this.product.price = params['price'];
    });
  }
  updateProduct(data:Product){
    this.productService.updateProduct(data);
    alert("Product updated:-"+data.id+" "+data.name+" "+data.price);
  }
}
