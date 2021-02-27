import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwifthomeComponent } from './swifthome.component';

describe('SwifthomeComponent', () => {
  let component: SwifthomeComponent;
  let fixture: ComponentFixture<SwifthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwifthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwifthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
