import { Component, OnInit } from '@angular/core';
import { product } from 'src/models/product';
import { HttpService } from '../services/http.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products:product[]=[];
  constructor(private ProductService:HttpService) { }

  ngOnInit(): void {
    this.ProductService.GetAllProducts().subscribe(data=>{
      this.products=data;
    })
  }

}
