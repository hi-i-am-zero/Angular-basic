import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms'
import { CurrencyPipe } from './shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from './shared/pipes/UpperCasePipe.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule, CurrencyPipe, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage = '';

  handleClickMe(): void {
    this.clickMessage = 'Click Me Hello World';
  }

  updateField(): void {
    console.log('Hello World');
  }
}
