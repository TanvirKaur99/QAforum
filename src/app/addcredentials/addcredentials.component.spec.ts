import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcredentialsComponent } from './addcredentials.component';

describe('AddcredentialsComponent', () => {
  let component: AddcredentialsComponent;
  let fixture: ComponentFixture<AddcredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
