import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
  name = new FormControl('');
  price = new FormControl('');

  constructor(private blogService: BlogService) {}

  handleAddCart() {
    console.log(this.name.value);
    console.log(this.price.value);
  }
}
