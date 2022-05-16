import React, {Component} from "react";
import styled from 'styled-components'

const ProdutosCarrinho = styled.div`
     display: flex;
     justify-content: space-between;
`


export default class Carrinho extends Component{
    render(){
        return(
            <ProdutosCarrinho>
                <p>{this.props.Quantidade}</p>
                <p>{this.props.Nome}</p>
                <button onClick={this.props.FuncaoRemover}>Remover Produto</button>
            </ProdutosCarrinho>

        )
    }
}