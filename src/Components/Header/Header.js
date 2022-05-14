import React, { Component } from "react";
import styled from "styled-components";

const ContainerPrincipal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 200px;
    max-width: 100vw;
    background-color: #4169E1;
    
    
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
    display: flex;
    margin: 20px 50px;
    align-items: center;

    img{
        height: 40px;
        width: 40Px;
        margin-right: 10px;

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
                    <input type="text" placeholder="O que você esta procurando?" id="campoDeBusca" />
                    <img src="img/pesquisa.png" alt="Lupa"></img>
                </Input>

                <AreaLogin>
                    <Perfil>
                        <img src="img/perfil.png" alt="Perfil"></img>
                        <p>Entre ou Cadastre-se</p>
                    </Perfil>

                    <Sacola>
                        <img src="img/sacola.png" alt="Sacola de Compras"></img>
                        <p>Sua Sacola</p>
                    </Sacola>

                </AreaLogin>
            </ContainerPrincipal>
            
        )
    }
}