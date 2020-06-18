import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HederNavegatorComponent } from './heder-navegator.component';

describe('HederNavegatorComponent', () => {
  let component: HederNavegatorComponent;
  let fixture: ComponentFixture<HederNavegatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HederNavegatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HederNavegatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
