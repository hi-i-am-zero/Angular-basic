import { NgFor, NgIf } from "@angular/common";
import { Component, Input, OnChanges, OnDestroy, Output, SimpleChanges } from "@angular/core";
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
export class ProductItemComponent implements OnChanges, OnDestroy {
  @Input() products: ProductItems[] = [];

  @Output() dataEvent = new EventEmitter<number>();

  get totalPrice(): number {
    const sum = this.products.reduce((total, item) => {
      return total + item.price;
    }, 0);

    return sum;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['products'].currentValue);
    console.log(changes['products'].previousValue);
  }

  ngOnDestroy(): void {
    console.log('Component is removed');
  }

  handleDelete = (id: number) => {
    this.dataEvent.emit(id);
  }
}
