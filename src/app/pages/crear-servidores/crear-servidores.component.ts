import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-crear-servidores',
  templateUrl: './crear-servidores.component.html',
  styleUrls: ['./crear-servidores.component.css']
})
export class CrearServidoresComponent implements OnInit {
  token = localStorage.getItem('token') + '';
  id_server: number;

  formServidor: any;

  constructor(private _servidor: ClientesService,
    @Inject(MAT_DIALOG_DATA) data: datosServidor) {

    this.id_server = data.server.id_server;
    if (this.id_server != 0) {
      this.formServidor = new FormGroup({
        id_sucursal: new FormControl(data.server.id_sucursal, [Validators.required]),
        id_nodo: new FormControl(data.server.id_nodo, [Validators.required]),
        tipo_server: new FormControl(data.server.tipo_server, [Validators.required]),
        clave_publica: new FormControl(data.server.clave_publica, [Validators.required]),
        ip_publica: new FormControl(data.server.ip_publica, [Validators.required]),
        port_wireguard: new FormControl(data.server.port_wireguard, [Validators.required]),
        subred: new FormControl(data.server.subred, [Validators.required]),
        ip_privada: new FormControl(data.server.ip_privada, [Validators.required]),
        dns: new FormControl(data.server.dns, [Validators.required]),

      })


    } else {
      this.formServidor = new FormGroup({
        id_sucursal: new FormControl('', [Validators.required]),
        id_nodo: new FormControl('', [Validators.required]),
        tipo_server: new FormControl('', [Validators.required]),
        clave_publica: new FormControl('', [Validators.required]),
        ip_publica: new FormControl('', [Validators.required]),
        port_wireguard: new FormControl('', [Validators.required]),
        subred: new FormControl('', [Validators.required]),
        ip_privada: new FormControl('', [Validators.required]),
        dns: new FormControl('', [Validators.required]),
      })
    }

  }


  ngOnInit(): void {
  }

  postCreateServidor() {

    this._servidor.postServidores(this.token, this.formServidor.controls.id_sucursal.value
      , this.formServidor.controls.id_nodo.value, this.formServidor.controls.tipo_server.value + '',
      this.formServidor.controls.clave_publica.value + '', this.formServidor.controls.ip_publica.value +'', 
      this.formServidor.controls.port_wireguard.value +'', this.formServidor.controls.subred.value +'', this.formServidor.controls.ip_privada.value +'', 
      this.formServidor.controls.dns.value +'').subscribe((res: any) => {
        console.log(res);
      })
  }

  putActualizarServidor() {
    this._servidor.putServidores(this.token, this.id_server,this.formServidor.controls.id_sucursal.value
      , this.formServidor.controls.id_nodo.value, this.formServidor.controls.tipo_server.value + '',
      this.formServidor.controls.clave_publica.value + '', this.formServidor.controls.ip_publica.value +'', 
      this.formServidor.controls.port_wireguard.value +'', this.formServidor.controls.subred.value +'', this.formServidor.controls.ip_privada.value +'', 
      this.formServidor.controls.dns.value +'').subscribe((res: any) => {
        console.log(res);
      })
  }

}

export interface datosServidor {
  server: any;
}
