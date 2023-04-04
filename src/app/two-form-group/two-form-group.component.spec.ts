import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFormGroupComponent } from './two-form-group.component';

describe('TwoFormGroupComponent', () => {
  let component: TwoFormGroupComponent;
  let fixture: ComponentFixture<TwoFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
