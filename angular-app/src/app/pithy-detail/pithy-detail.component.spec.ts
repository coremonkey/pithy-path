import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PithyDetailComponent } from './pithy-detail.component';

describe('PithyDetailComponent', () => {
  let component: PithyDetailComponent;
  let fixture: ComponentFixture<PithyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PithyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PithyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
