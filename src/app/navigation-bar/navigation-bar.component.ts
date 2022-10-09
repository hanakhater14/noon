import { Component, OnInit } from '@angular/core';
import { countries } from 'country-flag-icons'
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  city="القاهرة"
  constructor() { }

  ngOnInit(): void {
  }

}
