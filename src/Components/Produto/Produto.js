import React, { Component } from "react";
import styled from 'styled-components'


const Card = styled.div`
margin: 10px;

`


const CardProduto = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    -moz-box-shadow:    -6px 2px 5px 0px rgba(50, 50, 50, 0.75);
    box-shadow:         -6px 2px 5px 0px rgba(50, 50, 50, 0.75);
    border-radius: 20px 40px;

    img{
        height: 350px;
        width: 320px;
        
    }

    h3{
        margin-top: 3px;
        font-family: Arial;
    }

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


export default class Produtos extends Component {
    render() {
        return (
            <Card>
                <CardProduto>
                    <img src={this.props.CaminhoImg}></img>
                    <h3>{this.props.TituloProduto}</h3>
                    <h3>R$ {this.props.Preco}</h3>
                    <button onClick={this.props.AdicionarSacola}>Adicionar à Sacola</button>
                </CardProduto>
            </Card>
        )
    }
}