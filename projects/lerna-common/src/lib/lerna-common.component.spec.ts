import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LernaCommonComponent } from './lerna-common.component';

describe('LernaCommonComponent', () => {
  let component: LernaCommonComponent;
  let fixture: ComponentFixture<LernaCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LernaCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LernaCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
