import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageItemComponent } from './home-page-item.component';

describe('HomePageItemComponent', () => {
  let component: HomePageItemComponent;
  let fixture: ComponentFixture<HomePageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
