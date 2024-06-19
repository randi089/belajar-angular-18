import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild, OnInit } from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialComponent implements OnInit {
  sliderT = viewChild<ElementRef<SwiperContainer>>('sliderTesti');

  constructor() {
  }

  ngOnInit(): void {

  }

  testimonials = [
    {
      image: 'images/testimonial-1.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      image: 'images/testimonial-2.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      image: 'images/testimonial-3.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      image: 'images/testimonial-4.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      image: 'images/testimonial-5.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  ]
}
