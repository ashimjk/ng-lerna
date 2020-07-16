import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LernaSampleComponent } from './lerna-sample.component';

describe('LernaSampleComponent', () => {
  let component: LernaSampleComponent;
  let fixture: ComponentFixture<LernaSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LernaSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LernaSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
