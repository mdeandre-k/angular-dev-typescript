import { Injectable } from '@angular/core';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[]
  ) {}
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
     {
      'id': 0,
      'title': 'First Product',
      'price': 24.99,
      'rating': 4.3,
      'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'categories': ['electronics', 'hardware']
    },
    {
      'id': 1,
      'title': 'Second Product',
      'price': 64.99,
      'rating': 3.5,
      'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'categories': ['books']
    },
    {
      'id': 3,
      'title': 'Second Product',
      'price': 64.99,
      'rating': 3.5,
      'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'categories': ['books']
    },
    {
      'id': 4,
      'title': 'Second Product',
      'price': 64.99,
      'rating': 3.5,
      'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'categories': ['books']
    },
    {
      'id': 5,
      'title': 'Second Product',
      'price': 64.99,
      'rating': 3.5,
      'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'categories': ['books']
    },
    {
      'id': 6,
      'title': 'Second Product',
      'price': 64.99,
      'rating': 3.5,
      'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'categories': ['books']
    }];

  constructor() { }

  getProducts(): Product[] {
    return this.products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductById(id: number): Product {
    return this.products.find(p => p.id === id);
  }
}
