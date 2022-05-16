import React, { Component } from "react";
import styled from "styled-components";



const ContainerPrincipal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 200px;
    width: 100vw;
    animation: color-change-2x 2s linear infinite alternate both;

    @keyframes color-change-2x {
    0% {
      background: #19dcea;
    }
    100% {
      background: #b22cff;
    }
  }
    
    
`

const NomeLogo = styled.div`
    display: flex;
    margin: 20px 50px;
    align-items: center;

`

const ImgLogo = styled.img`
    height: 80px;
    width: 80px;

`
const ImgNome = styled.img`
    height: 50px;
    width: 150px;

`

const Input = styled.div`
    display: flex;
    margin: 20px 50px;

    img{
        height: 30px;
        width: 30Px;
        margin-left: 10px;
    }

    input{
        height: 30px;
        width: 300px;
    }

`

const AreaLogin = styled.div`
    display: flex;
`

const Perfil = styled.div`
    display: flex;
    margin: 20px;
    align-items: center;

    img{
        height: 40px;
        width: 40Px;
        margin-right: 10px;

    }
`

const Sacola = styled.div`
button{
    position: relative;
    background: transparent;
    display: flex;
    margin: 20px 50px;
    align-items: center;
    border: none;
    cursor: pointer;
    
        img{
            height: 40px;
            width: 40Px;
            margin-right: 10px;
    
        }

        span{
            background-color: white;
            padding: 3px;
            border-radius: 25%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

`



export default class Header extends Component {
    render() {
        return (
            <ContainerPrincipal>
                <NomeLogo>
                    <ImgLogo src="img/logo.png" alt="Logo"></ImgLogo>
                    <ImgNome src="img/space-t.png" alt="Nome"></ImgNome>
                </NomeLogo>

                <Input>
                    <input onChange={this.props.PesquisaItem} value={this.props.valorPesquisa} type="search" placeholder="O que você esta procurando?" id="campoDeBusca" />
                    <img src="img/pesquisa.png" alt="Lupa"></img>
                </Input>

                <AreaLogin>
                    <Perfil>
                        <img src="img/perfil.png" alt="Perfil"></img>
                        <p>Entre ou Cadastre-se</p>
                    </Perfil>

                    <Sacola>
                        <button  onClick={this.props.VerCarrinho}>
                            <img src="img/sacola.png" alt="Sacola de Compras"></img>
                            <p>Sua Sacola</p>
                            {this.props.quantidadeItensCarrinho ? <span>{this.props.quantidadeItensCarrinho}</span> : ""}
                        </button>
                    </Sacola>

                </AreaLogin>
            </ContainerPrincipal>

        )
    }
}