import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);
@Component({
  selector: 'app-ads-banner',
  templateUrl: './ads-banner.component.html',
  styleUrls: ['./ads-banner.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdsBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

}
