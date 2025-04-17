import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms'
import { CurrencyPipe } from './shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from './shared/pipes/UpperCasePipe.pipe';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderLayoutComponent, 
    FormsModule, 
    CurrencyPipe, 
    UpperCasePipe,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage = '';

  products = [
    { name: 'samba og', price: 400000, image: 'assets/images/giay-nike.jpg' },
    { name: 'nike f1', price: 500000, image: 'assets/images/giay-nike.jpg' },
    { name: 'adidas f2', price: 600000, image: 'assets/images/giay-nike.jpg' },
    { name: 'mlb f3', price: 700000, image: 'assets/images/giay-nike.jpg' },
  ];

  handleClickMe(): void {
    this.clickMessage = 'Click Me Hello World';
  }

  updateField(): void {
    console.log('Hello World');
  }
}
