import React from 'react';
import Header from './Components/Header/Header';
import styled from "styled-components";
import Filtros from './Components/Filtros/Filtros';
import Produtos from './Components/Produto/Produto';
import Footer from './Components/Footer/Footer';
import Carrinho from './Components/Carrinho/Carrinho';

const ContainerPrincipal = styled.div`
position: relative;

#idCar{
  width: 450px;
  position: absolute;
  top: 120px;
  right: 0;
  background-color: white;
  padding: 10px;
  
  h3{
    text-align: center;
  }
  
  h4{
    text-align: center;
  }
}

.car{
  opacity: 0;
}


`

const Banner = styled.img`
 height: 350px;
 width: 100vw;
`

const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
`



export default class App extends React.Component {

  state = {
    produtos: [
      {
        id: 1,
        name: "Camiseta Viajante Espaço",
        value: 59.90,
        imageUrl: "img/camiseta1.jpg",
        quantidade: 1
      },
      {
        id: 2,
        name: "Camiseta viagem dos Ets",
        value: 34.97,
        imageUrl: "img/camiseta2.jpg",
        quantidade: 1
      },
      {
        id: 3,
        name: "Camisetas Bolhas Astronautas",
        value: 47.56,
        imageUrl: "img/camiseta3.jpg",
        quantidade: 1
      },
      {
        id: 4,
        name: "Camiseta Astronauta Àgua Viva",
        value: 75.90,
        imageUrl: "img/camiseta4.jpg",
        quantidade: 1
      }
    ],
    arrayCarrinho: [],
    valorTotalCarrinho: 0,
    busca: ''
  }


  AdicionarSacola = (x) => {
    if (!this.state.arrayCarrinho.length) {
      const NovoArrayProdutos = [...this.state.arrayCarrinho, x]
      const valorCarrinho = this.state.valorTotalCarrinho + x.value
      this.setState({ arrayCarrinho: NovoArrayProdutos, valorTotalCarrinho: valorCarrinho })
    } else {
      const NovoArrayProdutos = this.state.arrayCarrinho.map((y) => {
        if (x.id === y.id) {
          y.quantidade = y.quantidade + 1
          this.setState({ valorTotalCarrinho: this.state.valorTotalCarrinho + x.value })
        }
        return y
      })
      const NewProducts = NovoArrayProdutos.filter((z) => {
        return z.id === x.id
      })
      console.log(NewProducts)
      if (!NewProducts.length) {
        NovoArrayProdutos.push(x)
        this.setState({ valorTotalCarrinho: this.state.valorTotalCarrinho + x.value })
      }
      this.setState({ arrayCarrinho: NovoArrayProdutos })
    }

  }

  RemoverProdutos = (x) => {
    if (x.quantidade > 1) {
      const item = this.state.arrayCarrinho.map((item) => {
        if (x.id === item.id) {
          item.quantidade = item.quantidade - 1
          this.setState({ valorTotalCarrinho: this.state.valorTotalCarrinho - x.value })
        }
        return item
      })
      this.setState({ arrayCarrinho: item })
    } else {
      const item2 = this.state.arrayCarrinho.filter((item) => {
        return item.id !== x.id
      })
      this.setState({ arrayCarrinho: item2, valorTotalCarrinho: this.state.valorTotalCarrinho - x.value })
    }
  }

  VerCarrinho = () => {
    const seeCar = document.getElementById("idCar")
    seeCar.classList.toggle("car")
  }


  PesquisaItem = (event) => {
    this.setState({busca: event.target.value})
  }




  render() {
    const ProdutosFiltrados = this.state.produtos.filter((item) =>{
      return item.name.includes(this.state.busca)
    })
    const ListaDeProdutos = ProdutosFiltrados.map((produto) => {
      return (
        <Produtos
          CaminhoImg={produto.imageUrl}
          TituloProduto={produto.name}
          Preco={produto.value}
          AdicionarSacola={() => this.AdicionarSacola(produto)}
        />
      )
    })

    const ListaDeProdutosCarrinho = this.state.arrayCarrinho.map((produtos) => {
      return (
        <Carrinho
          Quantidade={produtos.quantidade}
          Nome={produtos.name}
          FuncaoRemover={() => this.RemoverProdutos(produtos)}
        />
      )
    })

    return (
      <ContainerPrincipal>
        <Header
          VerCarrinho={this.VerCarrinho}
          quantidadeItensCarrinho={this.state.arrayCarrinho.length}
          valorPesquisa={this.state.busca}
          PesquisaItem={this.PesquisaItem}
        />
        <div id='idCar'>
          <h3>Sacola de Compras</h3>
          {this.state.arrayCarrinho.length ? "" : <h4>Sacola Vazia.</h4>}
          {ListaDeProdutosCarrinho}
          {this.state.arrayCarrinho.length ? <h4>Valor Total: R$ {this.state.valorTotalCarrinho.toFixed(2)}</h4> : ""}
        </div>
        <Banner src='img/banner.jpg' alt='Banner'></Banner>
        <Filtros />
        <Cards>{ListaDeProdutos}</Cards>
        <Footer />
      </ContainerPrincipal>
    )
  }
}

