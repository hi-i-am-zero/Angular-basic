import { OnDestroy } from '@angular/core';
import { BlogService } from './../../services/BlogService';
import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from '../shared/header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../shared/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductItems } from '../shared/types/productItem';
import { ProductItemComponent } from '../shared/product-item/productItem.component';
import { HttpClient } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductItemComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
// export class HomeComponent implements OnInit, DoCheck {
export class HomeComponent implements OnInit, OnDestroy {
  nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage = '';

  // isActive = true;
  isVisible = true;

  getBlogApi: Subscription;

  products: ProductItems[] = [
    {
      id: 1,
      name: 'samba og',
      price: 400000,
      image: 'assets/images/giay-nike.jpg',
    },
    {
      id: 2,
      name: 'nike f1',
      price: 500000,
      image: 'assets/images/giay-nike.jpg',
    },
    {
      id: 3,
      name: 'adidas f2',
      price: 600000,
      image: 'assets/images/giay-nike.jpg',
    },
    {
      id: 4,
      name: 'mlb f3',
      price: 700000,
      image: 'assets/images/giay-nike.jpg',
    },
  ];

  constructor(private blogService: BlogService) {
    console.log('Initalize Component');
    this.getBlogApi = new Subscription();
  }

  ngOnInit(): void {
    this.getBlogApi = this.blogService
      .getBlogs()
      .pipe(
        map(({ data }) =>
          data
            .map((item: any) => {
              return {
                ...item,
                name: item.title,
                price: Number(item.body),
                image: 'assets/images/giay-nike.jpg',
              };
            })
            .filter((product) => product.price > 300000)
        )
      )
      .subscribe((res) => {
        this.products = res;
      });
  }
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json))

  ngOnDestroy(): void {
    if (this.getBlogApi) {
      this.getBlogApi.unsubscribe();
      console.log('getBlogApi unsubscribed');
    }
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
    this.blogService.deleteBlog(id).subscribe(({ data }: any) => {
      if(data == 1){
        this.products = this.products.filter((item) => item.id !== id);
      }
    });
  };

  handleChangeVisible = () => {
    this.isVisible = false;
  };

  updateField(): void {
    console.log('Hello World');
  }
}
