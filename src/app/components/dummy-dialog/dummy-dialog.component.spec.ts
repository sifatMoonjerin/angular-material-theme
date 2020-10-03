import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDialogComponent } from './dummy-dialog.component';

describe('DummyDialogComponent', () => {
  let component: DummyDialogComponent;
  let fixture: ComponentFixture<DummyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
