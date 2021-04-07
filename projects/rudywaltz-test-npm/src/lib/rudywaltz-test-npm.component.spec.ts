import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudywaltzTestNpmComponent } from './rudywaltz-test-npm.component';

describe('RudywaltzTestNpmComponent', () => {
  let component: RudywaltzTestNpmComponent;
  let fixture: ComponentFixture<RudywaltzTestNpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RudywaltzTestNpmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RudywaltzTestNpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
