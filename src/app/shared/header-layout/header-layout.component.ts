import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'header-layout',
    standalone: true, //Đánh dấu component này là độc lập, không cần khai báo trong NgModule.
    imports: [
        RouterLink,
    ],
    templateUrl: './header-layout.component.html',
    styleUrl: './header-layout.component.scss'
})

export class HeaderLayoutComponent{

}