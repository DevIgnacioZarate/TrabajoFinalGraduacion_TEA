import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCriterioPage } from './visualizar-criterio.page';

describe('VisualizarCriterioPage', () => {
  let component: VisualizarCriterioPage;
  let fixture: ComponentFixture<VisualizarCriterioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarCriterioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarCriterioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
