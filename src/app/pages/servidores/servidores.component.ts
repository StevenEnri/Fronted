import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ClientesService } from 'src/app/services/clientes.service';

import {CrearClienteComponent} from '../crear-cliente/crear-cliente.component';

import { Subscription } from "rxjs";
import { CrearServidoresComponent } from '../crear-servidores/crear-servidores.component';

@Component({
  selector: 'app-servidores',
  templateUrl: './servidores.component.html',
  styleUrls: ['./servidores.component.css']
})
export class ServidoresComponent implements OnInit {
  token = localStorage.getItem('token') + '';
  suscription: any;

  
  servidores: Array<any> = [];

  constructor(private _servidor: ClientesService, private dialog: MatDialog) { 

    this.suscription=Subscription;
  }

  ngOnInit(): void {
    this.get()
    this.suscription=this._servidor.refresh$.subscribe(()=>{
      this.get()
    })
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  

  get() {
    let token = localStorage.getItem('token') + '';
    this._servidor.getServidores(token).subscribe((res: any) => {
      console.log(res);
      
      this.servidores = res.server;
      console.log(this.servidores)
    })

  }
  abrirDialogCrearServidor(server:any)
  {
    let dialog = this.dialog.open(CrearServidoresComponent, {
      data: {server: server},
      width: '50%',
      height: '50%',
      panelClass: 'my-class'
    });
    dialog.afterClosed().subscribe(res => {});
  }
  deleteEliminarServidor(id_server:number){
    this._servidor.deleteServidores(this.token, id_server).subscribe((res:any)=>{
      console.log(res);
      
    })
  }
}

  


