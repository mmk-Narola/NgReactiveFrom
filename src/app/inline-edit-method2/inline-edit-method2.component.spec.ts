import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditMethod2Component } from './inline-edit-method2.component';

describe('InlineEditMethod2Component', () => {
  let component: InlineEditMethod2Component;
  let fixture: ComponentFixture<InlineEditMethod2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineEditMethod2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineEditMethod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
