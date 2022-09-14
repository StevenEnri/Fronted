import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private _refresh$ = new Subject<void>()
  url=environment.apiUrl


  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$
  }

  get(token:string): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    return this.http.get(this.url+'/cliente', {headers: headers});
  }
  postCliente(token:string, nombres_cliente:string, clave_publica_cliente:string, usuario:string, contrasena:string): Observable<any>{
    let headers = new HttpHeaders().set('access-token', token);
    return this.http.post(this.url+'/cliente',{nombres_cliente, clave_publica_cliente, usuario, contrasena}, {headers: headers})
    .pipe(
      tap(()=>{
        this._refresh$.next()
      })
    )
  }
  putCliente(token:string, id_cliente:number, nombres_cliente:string, clave_publica_cliente:string, usuario:string, contrasena:string): Observable<any>{
    let headers = new HttpHeaders().set('access-token', token);
    return this.http.put(this.url+'/cliente',{id_cliente, nombres_cliente, clave_publica_cliente, usuario, contrasena}, {headers: headers})
    .pipe(
      tap(()=>{
        this._refresh$.next()
      })
    )
  }
  deleteCliente(token: string, id_cliente: number): Observable<any>{
    let headers = new HttpHeaders().set('access-token', token);
    let options= {id_cliente:id_cliente}
    return this.http.delete(this.url+'/cliente', {headers: headers, body:options})
    .pipe(
      tap(()=>{
        this._refresh$.next()
      })
    )



  }

  getSucursales(token:string): Observable<any>{
    let headers = new HttpHeaders().set('access-token', token);
    return this.http.get(this.url+'/sucursales', {headers: headers});

  }

  postSucursal(token:string, sucursales:string): Observable<any>{
    let headers = new HttpHeaders().set('access-token', token);
    return this.http.post(this.url+'/sucursales',{sucursales}, {headers: headers})
    .pipe(
      tap(()=>{
        this._refresh$.next()
      })
    )
  }
  putSucursal(token:string, id_sucursal: number, sucursales:string, ): Observable<any>{
    let headers = new HttpHeaders().set('access-token', token);
    return this.http.put(this.url+'/sucursales',{id_sucursal, sucursales}, {headers: headers})
    .pipe(
      tap(()=>{
        this._refresh$.next()
      })
    )
  }
  deleteSucursal(token: string, sucursales: number): Observable<any>{
    let headers = new HttpHeaders().set('access-token', token);
    let options= {sucursales:sucursales}
    return this.http.delete(this.url+'/sucursales', {headers: headers, body:options})
    .pipe(
      tap(()=>{
        this._refresh$.next()
      })
    )



  }
  getServidores(token:string): Observable<any>{
    let headers = new HttpHeaders().set('access-token', token);
    return this.http.get(this.url+'/server', {headers: headers});
  }
  
}
