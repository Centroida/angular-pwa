import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantsComponent } from './elephants.component';

describe('ElephantsComponent', () => {
  let component: ElephantsComponent;
  let fixture: ComponentFixture<ElephantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElephantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElephantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
