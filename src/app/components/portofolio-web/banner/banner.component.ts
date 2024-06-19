import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
// import { NgFor } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    MatButtonModule
    // NgFor
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent {
  listImage = [
    'images/bg-1.jpg',
    'images/bg-2.jpg',
    'images/bg-3.jpg'
  ]
}
