import React, {Component} from "react";
import styled from 'styled-components'

const ProdutosCarrinho = styled.div`
     display: flex;
     justify-content: space-between;


        button{
    margin-bottom: 15px;
    background: #4169E1;
    background-image: -webkit-linear-gradient(top, #4169E1, #2980b9);
    background-image: -moz-linear-gradient(top, #4169E1, #2980b9);
    background-image: -ms-linear-gradient(top, #4169E1, #2980b9);
    background-image: -o-linear-gradient(top, #4169E1, #2980b9);
    background-image: linear-gradient(to bottom, #4169E1, #2980b9);
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: Arial;
    color: #ffffff;
    font-size: 15px;
    padding: 5px 10px 5px 10px;
    text-decoration: none;
    }

    button:hover{
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
    }
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