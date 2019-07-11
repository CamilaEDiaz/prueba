import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroReservasComponent } from './registro-reservas.component';

describe('RegistroReservasComponent', () => {
  let component: RegistroReservasComponent;
  let fixture: ComponentFixture<RegistroReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
