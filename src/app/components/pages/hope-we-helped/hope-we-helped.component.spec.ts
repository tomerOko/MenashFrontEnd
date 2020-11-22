import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopeWeHelpedComponent } from './hope-we-helped.component';

describe('HopeWeHelpedComponent', () => {
  let component: HopeWeHelpedComponent;
  let fixture: ComponentFixture<HopeWeHelpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopeWeHelpedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HopeWeHelpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
