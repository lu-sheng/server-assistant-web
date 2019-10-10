import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamverifyComponent } from './paramverify.component';

describe('ParamverifyComponent', () => {
  let component: ParamverifyComponent;
  let fixture: ComponentFixture<ParamverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
