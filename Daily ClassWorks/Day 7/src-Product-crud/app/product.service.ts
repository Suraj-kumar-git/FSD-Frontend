import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) {

  }

  baseUrl='http://localhost:3000/products/'
  getAll():Observable<Product[]> { 
    return this._http.get<Product[]>(this.baseUrl);
  }

  insertProduct(product:Product){
    this._http.post<Product>(this.baseUrl,product).subscribe((response)=>{console.log('Product Added ',response)});
  }

  updateProduct(product:Product){
    this._http.put<Product>(this.baseUrl+product.id,product).subscribe((response)=>console.log('Product Updated ',response));
  }

  deleteProduct(id:number){
    this._http.delete<Product>(this.baseUrl+id).subscribe((product)=>console.log('Product Deleted ',product));
  }
}
