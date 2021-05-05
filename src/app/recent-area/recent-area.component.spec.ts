import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAreaComponent } from './recent-area.component';

describe('RecentAreaComponent', () => {
  let component: RecentAreaComponent;
  let fixture: ComponentFixture<RecentAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
