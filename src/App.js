import React from "react";
import autronauta from './imagens/autronauta.jpg'
import meteoro from './imagens/meteoro.jpg'
import nave from './imagens/nave.jpg'
import roupaEspacial from './imagens/roupa-espacial.jpg'

class App extends React.Component{


  state = {
    produtoMax: ``,
    produtoMin: ``,
    pesquisa : ``,

    carrinhoProduto : [],
    produtosLoja : [

      {
        id: 01,
        nome: `Autronauta`,
        preco: 10.000,
        foto:autronauta
      },

      {
        id: 02,
        nome: `Meteoro`,
        preco: 15.000,
        foto: meteoro
      },

      {
        id: 03,
        nome: `Nave`,
        preco: 50.000,
        foto:nave
      },

      {
        id: 04,
        nome: `Roupa Espacial`,
        preco: 20.000,
        foto: roupaEspacial
      }
    ]
  }

  render(){

    return(
      <>
      <h1>E-Commerce</h1>
      </>
    )
  }
}