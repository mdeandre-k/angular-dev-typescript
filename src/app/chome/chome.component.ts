import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'nga-chome',
  templateUrl: './chome.component.html',
  styleUrls: ['./chome.component.css']
})
export class ChomeComponent implements OnInit {

  products: Product[] = [];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
