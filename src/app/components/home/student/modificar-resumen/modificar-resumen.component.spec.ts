import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarResumenComponent } from './modificar-resumen.component';

describe('ModificarResumenComponent', () => {
  let component: ModificarResumenComponent;
  let fixture: ComponentFixture<ModificarResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarResumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
