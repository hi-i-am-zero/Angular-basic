import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BlogService } from '../../services/BlogService';
import { ProductItems } from '../shared/types/productItem';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  product = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    
  })

  get name(){
    return this.product.get('name');
  }
  
  get price(){
    return this.product.get('price');
  }

  constructor(private blogService: BlogService) {}

  handleAddCart() {
    console.log(this.name?.value);
    console.log(this.price?.value);
  }
}
