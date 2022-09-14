import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

 
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  token = localStorage.getItem('token') + '';
  id_cliente: number;

  

  formClientes: any;

  constructor(private _clientes: ClientesService,
              @Inject(MAT_DIALOG_DATA) data: datosCliente) 
  {
    
    this.id_cliente = data.cliente.id_cliente;
    if(this.id_cliente != 0)
    {
      this.formClientes = new FormGroup({
        nombres_cliente: new FormControl(data.cliente.nombres_cliente, [Validators.required]),
        clave_publica_cliente: new FormControl(data.cliente.clave_publica_cliente, [Validators.required]),
        usuario: new FormControl(data.cliente.usuario, [Validators.required]),
        contrasena: new FormControl(data.cliente.contrasena, [Validators.required]),
      })
    }else
    {
      this.formClientes = new FormGroup({
        nombres_cliente: new FormControl('', [Validators.required]),
        clave_publica_cliente: new FormControl('', [Validators.required]),
        usuario: new FormControl('', [Validators.required]),
        contrasena: new FormControl('', [Validators.required]),
      })
    }
    
  }

  ngOnInit(): void {
  }

  postCreateCliente() {
    
    this._clientes.postCliente(this.token, this.formClientes.controls.nombres_cliente.value + ''
      , this.formClientes.controls.clave_publica_cliente.value + '', this.formClientes.controls.usuario.value + '',
      this.formClientes.controls.contrasena.value + '').subscribe((res: any) => {
        console.log(res);
      })
  }

  putActualizarCliente()
  {
    this._clientes.putCliente(this.token, this.id_cliente, this.formClientes.controls.nombres_cliente.value + ''
    , this.formClientes.controls.clave_publica_cliente.value + '', this.formClientes.controls.usuario.value + '',
    this.formClientes.controls.contrasena.value + '').subscribe((res:any) => {
      console.log(res);
    });
  }
  

}

export interface datosCliente
{
  cliente: any;
}
