import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTravauxComponent } from './ajout-travaux.component';

describe('AjoutTravauxComponent', () => {
  let component: AjoutTravauxComponent;
  let fixture: ComponentFixture<AjoutTravauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTravauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTravauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
