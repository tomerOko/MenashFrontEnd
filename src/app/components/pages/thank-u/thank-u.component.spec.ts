import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankUComponent } from './thank-u.component';

describe('ThankUComponent', () => {
  let component: ThankUComponent;
  let fixture: ComponentFixture<ThankUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
