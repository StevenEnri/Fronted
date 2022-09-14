import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearServidoresComponent } from './crear-servidores.component';

describe('CrearServidoresComponent', () => {
  let component: CrearServidoresComponent;
  let fixture: ComponentFixture<CrearServidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearServidoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearServidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
