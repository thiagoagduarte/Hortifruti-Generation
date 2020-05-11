import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  // CRUD - CREATE(POST) READ(GET) UPDATE(PUT) E DELETE(DELETE)

  // END POINT - DECLARAR NO SERVICE TODOS OS PONTOS DE CONTATO COM O SERVIDOR UTILIZANDO CRUD

  // INICIO DAS OPERAÇÕES

  // READ
  getAllProdutos() {
    return this.http.get('http://31.220.57.121:9080/produtos')
  }

  getByIdProduto(id: number) {
    return this.http.get(`http://31.220.57.121:9080/produtos/${id}`)
  }

  postProduto(Produto: Produto) {
    return this.http.post('http://31.220.57.121:9080/produtos', Produto)
  }

  putProduto(Produto: Produto) {
    return this.http.put('http://31.220.57.121:9080/produtos', Produto)
  }

  deleteProduto(id: number) {
    return this.http.delete(`http://31.220.57.121:9080/produtos/${id}`)
  }

}