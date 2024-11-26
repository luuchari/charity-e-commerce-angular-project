import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
product: any;
addToCart(_arg0: any) {
throw new Error('Method not implemented.');
}

}
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      price: 400 ,
      image: 'assets/images/product1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 600,
      image: 'assets/images/product2.jpg'
    },
    {id: 2,
      name: 'Product 2',
      price: 750,
      image: 'assets/images/product2.jpg'}
    ];

    addToCart(product: any) {
      console.log(`${product.name} added to cart!`);
      // Add logic to handle the cart functionality here
    }
  }
