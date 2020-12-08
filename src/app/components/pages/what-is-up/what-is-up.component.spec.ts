import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsUpComponent } from './what-is-up.component';

describe('WhatIsUpComponent', () => {
  let component: WhatIsUpComponent;
  let fixture: ComponentFixture<WhatIsUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
