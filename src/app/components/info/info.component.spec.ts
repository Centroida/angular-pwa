import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondayComponent } from './info.component';

describe('InfoComponent', () => {
  let component: MondayComponent;
  let fixture: ComponentFixture<MondayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
