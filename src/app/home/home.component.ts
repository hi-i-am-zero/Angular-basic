import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "../shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms'
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../shared/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductItems } from '../shared/types/productItem';
import { ProductItemComponent } from "../shared/product-item/productItem.component";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductItemComponent,
    NgIf,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
// export class HomeComponent implements OnInit, DoCheck {
export class HomeComponent implements OnInit{
  nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage = '';

  // isActive = true;
  isVisible = true;

  products: ProductItems[] = [
    { id: 1, name: 'samba og', price: 400000, image: 'assets/images/giay-nike.jpg' },
    { id: 2, name: 'nike f1', price: 500000, image: 'assets/images/giay-nike.jpg' },
    { id: 3, name: 'adidas f2', price: 600000, image: 'assets/images/giay-nike.jpg' },
    { id: 4, name: 'mlb f3', price: 700000, image: 'assets/images/giay-nike.jpg' },
  ];

  constructor(private http: HttpClient){
    console.log('Initalize Component');
    this.http.get<any>('https://ninedev-api.vercel.app/blogs')
    .subscribe(({ data, message }) => {
      this.products = data.map((item: any) => {
        return {
          ...item,
          name: item.title,
          price: Number(item.body),
          image: 'assets/images/giay-nike.jpg',
        }
      });
    });
  }

  ngOnInit(): void {
    console.log('Initialized Component');
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
  }

  // ngDoCheck(): void {
  //   console.log('Check Component');
  // }

  handleClickMe(): void {
    this.clickMessage = 'Click Me Hello World';
  }
  handleDelete = (id: number) => {
    // const productIndex = this.products.findIndex((item) => item.id == id);
    // if (productIndex !== -1) {
    //   this.products.splice(productIndex, 1);
    // }
    this.products = this.products.filter((item) => item.id !== id)
  }

  handleChangeVisible = () => {
    this.isVisible = false;
  }

  updateField(): void {
    console.log('Hello World');
  }
}
