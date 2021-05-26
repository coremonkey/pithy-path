import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PithyComponent } from './pithy.component';

describe('PithyComponent', () => {
  let component: PithyComponent;
  let fixture: ComponentFixture<PithyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PithyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PithyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
