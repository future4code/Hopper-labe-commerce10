import React from 'react';
import Header from './Components/Header/Header';
import styled from "styled-components";
import Filtros from './Components/Filtros/Filtros';
import Produtos from './Components/Produto/Produto';


const Banner = styled.img`
 height: 350px;
 width: 100vw;
`


export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Banner src='img/banner.jpg' alt='Banner'></Banner>
        <Filtros/>
        <Produtos/>
      </div>
    )
  }
}
