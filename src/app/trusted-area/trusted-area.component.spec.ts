import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedAreaComponent } from './trusted-area.component';

describe('TrustedAreaComponent', () => {
  let component: TrustedAreaComponent;
  let fixture: ComponentFixture<TrustedAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
