import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftsearchbarComponent } from './swiftsearchbar.component';

describe('SwiftsearchbarComponent', () => {
  let component: SwiftsearchbarComponent;
  let fixture: ComponentFixture<SwiftsearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftsearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftsearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
