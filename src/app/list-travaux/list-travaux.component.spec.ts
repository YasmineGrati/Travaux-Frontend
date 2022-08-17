import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTravauxComponent } from './list-travaux.component';

describe('ListTravauxComponent', () => {
  let component: ListTravauxComponent;
  let fixture: ComponentFixture<ListTravauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTravauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTravauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
