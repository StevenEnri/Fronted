import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ClientesService } from 'src/app/services/clientes.service';

import {CrearClienteComponent} from '../crear-cliente/crear-cliente.component';

import { Subscription } from "rxjs";
import { CrearSucursalComponent } from '../crear-sucursal/crear-sucursal.component';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit, OnDestroy {
  token = localStorage.getItem('token') + '';
  suscription: any;

  sucursales: Array<any> = [];

  constructor(private _sucursal: ClientesService, private dialog: MatDialog) 
  {
    this.suscription=Subscription;
   }

   ngOnInit(): void {
    this.get()
    this.suscription=this._sucursal.refresh$.subscribe(()=>{
      this.get()
    })
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  get() {
    let token = localStorage.getItem('token') + '';
    this._sucursal.getSucursales(token).subscribe((res: any) => {
      this.sucursales = res.sucursal;
      console.log(this.sucursales)
    })

  }

  abrirDialogCrearSucursal(sucursal:any)
  {
    let dialog = this.dialog.open(CrearSucursalComponent, {
      data: {sucursal: sucursal},
      width: '50%',
      height: '50%',
      panelClass: 'my-class'
    });
    dialog.afterClosed().subscribe(res => {});
  }
  deleteEliminarSucursal(sucursales:number){
    this._sucursal.deleteSucursal(this.token, sucursales).subscribe((res:any)=>{
      console.log(res);
      
    })
  }

}
