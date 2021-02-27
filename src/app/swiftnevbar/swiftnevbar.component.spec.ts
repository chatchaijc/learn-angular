import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftnevbarComponent } from './swiftnevbar.component';

describe('SwiftnevbarComponent', () => {
  let component: SwiftnevbarComponent;
  let fixture: ComponentFixture<SwiftnevbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftnevbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftnevbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
