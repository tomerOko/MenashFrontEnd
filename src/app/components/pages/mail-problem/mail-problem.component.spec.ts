import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailProblemComponent } from './mail-problem.component';

describe('MailProblemComponent', () => {
  let component: MailProblemComponent;
  let fixture: ComponentFixture<MailProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
