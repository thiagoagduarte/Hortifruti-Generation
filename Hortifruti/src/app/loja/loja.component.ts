import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  listaProdutos: Produto[]

  produto: Produto = new Produto()
  id: number;

  alerta: boolean = false

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.findallProdutos()
    window.scroll(0, 0)
    let item: string = localStorage.getItem('delOk')
    if (item == "true") {
      this.alerta = true
      localStorage.clear()

      setTimeout(() => {
        location.assign('/loja')
      }, 5000);

    }
  }

  findallProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  publicar() {
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      location.assign('/loja')
    })
  }

}
