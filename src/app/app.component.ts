import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { createWebRequestFromNodeRequest } from '@angular/ssr/node';
import { cwd } from 'process';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nameBtn = 'Click Me!';

  clickMessage = '';

  handleClickMe(): void {
    this.clickMessage = 'Click Me Hello World';
  }

  updateField(): void {
    console.log('Hello World');
  }
}
