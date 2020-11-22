import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGoggleComponent } from './login-goggle.component';

describe('LoginGoggleComponent', () => {
  let component: LoginGoggleComponent;
  let fixture: ComponentFixture<LoginGoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGoggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
