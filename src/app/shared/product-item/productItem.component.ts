import { NgFor, NgIf } from "@angular/common";
import { Component, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet, RouterLink } from "@angular/router";
import { ProductItems } from "../types/productItem";
import { CurrencyPipe } from "../pipes/CurrencyPipe.pipe";
import { UpperCasePipe } from "../pipes/UpperCasePipe.pipe";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    RouterOutlet,
    // HeaderLayoutComponent,
    FormsModule,
    CurrencyPipe,
    UpperCasePipe,
    NgFor,
    //NgClass,
    NgIf,
    RouterLink,
  ],
  templateUrl: './productItem.component.html',
  styleUrl: './productItem.component.scss'
})
export class ProductItemComponent {
  @Input() products: ProductItems[] = [];
  @Output() dataEvent = new EventEmitter<number>();
  handleDelete = (id: number) => {
    this.dataEvent.emit(id);
  }
}
