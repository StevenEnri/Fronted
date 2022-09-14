import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { ServidoresComponent } from './pages/servidores/servidores.component';
import { CrearClienteComponent } from './pages/crear-cliente/crear-cliente.component';
import { CrearSucursalComponent } from './pages/crear-sucursal/crear-sucursal.component';
import { CrearServidoresComponent } from './pages/crear-servidores/crear-servidores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    SucursalesComponent,
    ServidoresComponent,
    CrearClienteComponent,
    CrearSucursalComponent,
    CrearServidoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
