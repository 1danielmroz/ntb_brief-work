import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtbFilterComponent } from './ntb-filter.component';

describe('NtbFilterComponent', () => {
  let component: NtbFilterComponent;
  let fixture: ComponentFixture<NtbFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtbFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtbFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
