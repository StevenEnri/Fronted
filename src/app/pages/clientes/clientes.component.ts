import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ClientesService } from 'src/app/services/clientes.service';

import {CrearClienteComponent} from '../crear-cliente/crear-cliente.component';

import { Subscription } from "rxjs";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, OnDestroy {
  token = localStorage.getItem('token') + '';
  suscription: any;

  clientes: Array<any> = [];

  constructor(private _clientes: ClientesService, private dialog: MatDialog) { 

    this.suscription=Subscription;
  }

  ngOnInit(): void {
    this.get()
    this.suscription=this._clientes.refresh$.subscribe(()=>{
      this.get()
    })
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  get() {
    let token = localStorage.getItem('token') + '';
    console.log(token);
    this._clientes.get(token).subscribe((res: any) => {
      this.clientes = res.server
      console.log(this.clientes)
    })
  }


  abrirDialogCrearCliente(cliente:any)
  {
    let dialog = this.dialog.open(CrearClienteComponent, {
      data: {cliente: cliente},
      width: '50%',
      height: '50%',
      panelClass: 'my-class'
    });
    dialog.afterClosed().subscribe(res => {});
  }
  deleteEliminarCliente(id_cliente:number){
    this._clientes.deleteCliente(this.token, id_cliente).subscribe((res:any)=>{
      console.log(res);
      
    })
  }



}
