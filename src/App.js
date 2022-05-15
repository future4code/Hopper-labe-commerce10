import React from 'react';
import Header from './Components/Header/Header';
import styled from "styled-components";
import Filtros from './Components/Filtros/Filtros';
import Produtos from './Components/Produto/Produto';
import Footer from './Components/Footer/Footer';


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
      },
      {
        id: 2,
        name: "Camiseta viagem dos Ets",
        value: 34.97,
        imageUrl: "img/camiseta2.jpg",
      },
      {
        id: 3,
        name: "Camisetas Bolhas Astronautas",
        value: 47.56,
        imageUrl: "img/camiseta3.jpg",
      },
      {
        id: 4,
        name: "Camiseta Astronauta Àgua Viva",
        value: 75.90,
        imageUrl: "img/camiseta4.jpg",
      }
    ]
  }




  render() {

    const ListaDeProdutos = this.state.produtos.map((produto) => {
      return(
        <Produtos
          CaminhoImg={produto.imageUrl}
          TituloProduto={produto.name}
          Preco={produto.value}
        />
      )
    })


    return (
      <div>
        <Header />
        <Banner src='img/banner.jpg' alt='Banner'></Banner>
        <Filtros />
        <Cards>{ListaDeProdutos}</Cards>
        <Footer/>
      </div>
    )
  }
}
