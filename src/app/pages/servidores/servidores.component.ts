import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-servidores',
  templateUrl: './servidores.component.html',
  styleUrls: ['./servidores.component.css']
})
export class ServidoresComponent implements OnInit {
  formServidor: FormGroup
  servidores: Array<any> = [];

  constructor(private fb: FormBuilder, private _servidor: ClientesService) { }

  ngOnInit(): void {
    this.initform();
    this.get();
  }

  initform() {
    this.formServidor = this.fb.group({
      id_server: ['', Validators.required],
      id_sucursal: ['', Validators.required],
      id_nodo:['', Validators.required],
      tipo_server:['', Validators.required],
      clave_publica:['', Validators.required],
      ip_publica:['', Validators.required],
      port_wireguard:['', Validators.required],
      subred:['', Validators.required],
      ip_privada:['', Validators.required],
      dns:['', Validators.required]

    })
  }

  get() {
    let token = localStorage.getItem('token') + '';
    this._servidor.getServidores(token).subscribe((res: any) => {
      console.log(res);
      
      this.servidores = res.server;
      console.log(this.servidores)
    })

  }
}

  


