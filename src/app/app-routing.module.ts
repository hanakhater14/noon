import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsBannerComponent } from './ads-banner/ads-banner.component';
import { CategoryRowComponent } from './category-row/category-row.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

const routes: Routes = [
  { path: 'MobileMainPage', component: NavigationBarComponent ,
   children: [
    {
      path:'GetHomePage', component: HomePageComponent
    },
    {
      path:'GetMainSliders', component:AdsBannerComponent
    }
  ] },
  { path: 'Categories/:index ', component: CategoryRowComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
