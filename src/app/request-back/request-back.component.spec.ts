import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBackComponent } from './request-back.component';

describe('RequestBackComponent', () => {
  let component: RequestBackComponent;
  let fixture: ComponentFixture<RequestBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
