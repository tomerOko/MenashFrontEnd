import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsContainerComponent } from './firs-container.component';

describe('FirsContainerComponent', () => {
  let component: FirsContainerComponent;
  let fixture: ComponentFixture<FirsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
