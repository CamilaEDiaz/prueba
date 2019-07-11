import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReservasComponent } from './editar-reservas.component';

describe('EditarReservasComponent', () => {
  let component: EditarReservasComponent;
  let fixture: ComponentFixture<EditarReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
