import { Component, OnInit, Input } from '@angular/core';
import { product } from 'src/models/product.d';


@Component({
  selector: 'app-home-page-item',
  templateUrl: './home-page-item.component.html',
  styleUrls: ['./home-page-item.component.css']
})
export class HomePageItemComponent implements OnInit {
  @Input() product!:product;
  constructor() { }

  ngOnInit(): void {
  }

}
