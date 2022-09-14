import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent implements OnInit {
  token = localStorage.getItem('token') + '';
  id_sucursal: number;

  formSucursal: any;

  constructor(private _sucursal: ClientesService,
    @Inject(MAT_DIALOG_DATA) data: datosSucursal) 
  {
    this.id_sucursal = data.sucursal.id_sucursal;
    console.log(this.id_sucursal);
    
    if (this.id_sucursal != 0) {
      this.formSucursal = new FormGroup({
        nombre_sucursal: new FormControl(data.sucursal.nombre_sucursal, [Validators.required]),
      })
    } else {
      this.formSucursal = new FormGroup({
        nombre_sucursal: new FormControl('', [Validators.required]),
      })
    }

  }


  ngOnInit(): void {
  }

  postCreateSucursal() {

    this._sucursal.postSucursal(this.token, this.formSucursal.controls.nombre_sucursal.value + ''
      ,).subscribe((res: any) => {
        console.log(res);
      })
  }

  putActualizarSucursal() {
    this._sucursal.putSucursal(this.token, this.id_sucursal, this.formSucursal.controls.nombre_sucursal.value + ''
      ,).subscribe((res: any) => {
        console.log(res);
      });
  }
}

export interface datosSucursal {
  sucursal: any;
}
