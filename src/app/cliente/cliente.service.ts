import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  

  url = 'http://localhost:3000/cliente';
  url_estado = 'http://localhost:3000/estado';
  url_cidade = 'http://localhost:3000/cidade';
  
  constructor(private http: HttpClient){}

  listar(){
    return this.http.get(this.url);
  }

  buscarById(id: number) {
    return this.http.get(this.url+'/'+id);
  }

  salvar(cliente: any){
    return this.http.post(this.url, cliente);
  }

  atualizar(cliente: any) {
    return this.http.put(this.url+'/'+cliente.id, cliente);
  }

  excluir(id: number) {
    return this.http.delete(this.url+'/'+id);
  }

  listarEstados(){
    return this.http.get(this.url_estado);
  }

  listarCidades(id: number) {
    return this.http.get(this.url_cidade+'?estado='+id);
  }
}
