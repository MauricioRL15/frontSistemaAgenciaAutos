import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarModeloComponent } from './guardar-modelo.component';

describe('GuardarModeloComponent', () => {
  let component: GuardarModeloComponent;
  let fixture: ComponentFixture<GuardarModeloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarModeloComponent]
    });
    fixture = TestBed.createComponent(GuardarModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
