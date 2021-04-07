import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudywaltzTestNpm2Component } from './rudywaltz-test-npm2.component';

describe('RudywaltzTestNpm2Component', () => {
  let component: RudywaltzTestNpm2Component;
  let fixture: ComponentFixture<RudywaltzTestNpm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RudywaltzTestNpm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RudywaltzTestNpm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
