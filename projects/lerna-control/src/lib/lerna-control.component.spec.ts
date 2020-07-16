import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LernaControlComponent } from './lerna-control.component';

describe('LernaControlComponent', () => {
  let component: LernaControlComponent;
  let fixture: ComponentFixture<LernaControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LernaControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LernaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
