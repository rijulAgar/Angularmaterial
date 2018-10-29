import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxCompComponent } from './redux-comp.component';

describe('ReduxCompComponent', () => {
  let component: ReduxCompComponent;
  let fixture: ComponentFixture<ReduxCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduxCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
