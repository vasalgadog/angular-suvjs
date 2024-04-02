import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaPruebaComponent } from './encuesta-prueba.component';

describe('EncuestaPruebaComponent', () => {
  let component: EncuestaPruebaComponent;
  let fixture: ComponentFixture<EncuestaPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuestaPruebaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncuestaPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
