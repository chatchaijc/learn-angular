import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftbannerComponent } from './swiftbanner.component';

describe('SwiftbannerComponent', () => {
  let component: SwiftbannerComponent;
  let fixture: ComponentFixture<SwiftbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
