import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DatFormatPipe } from '@pipes/dat-format.pipe';
import { SwiperContainer } from 'swiper/element';
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    MatButtonModule,
    DatFormatPipe
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsComponent {
  slider = viewChild<ElementRef<SwiperContainer>>('slider');

  onPrev() {
    this.slider()?.nativeElement.swiper.slidePrev();
  }

  onNext() {
    this.slider()?.nativeElement.swiper.slideNext();
  }
  listNews = [
    {
      title: 'Contoh 1',
      tag: 'berita 1',
      datePost: new Date('2024-05-25'),
      author: 'Rumzi',
      image: 'images/news-1.jpg'
    },
    {
      title: 'Contoh 2',
      tag: 'berita 2',
      datePost: new Date('2024-04-15'),
      author: 'Tasya',
      image: 'images/news-2.jpg'
    },
    {
      title: 'Contoh 3',
      tag: 'berita 3',
      datePost: new Date('2024-01-09'),
      author: 'Rinaldi',
      image: 'images/news-3.jpg'
    }
  ]
}
