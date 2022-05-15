import React, { Component } from "react";
import styled from 'styled-components'


const ContainerFiltros = styled.div`
    margin-top: -3.3px;
    display: flex;
    justify-content: space-evenly;
    border: 3px solid black;
    padding: 10px;
    align-items: center;
`

const FiltrosValores = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        text-decoration: underline overline;
    }

    input{
        border-radius: 5px;
    }
`



export default class Filtros extends Component {
    render() {
        return (
            <ContainerFiltros>
                <div>
                    <h2>
                        Filtrar produto:
                    </h2>
                </div>
                <FiltrosValores>
                    <p>Ordem:</p>
                    <select id="Ordem" name="Ordem">
                        <option value="Crescente">Crescente</option>
                        <option value="Decrescente">Decrescente</option>
                    </select>
                </FiltrosValores>
                
                <FiltrosValores>
                    <p>Valor Mínimo</p>
                    <input type="number" placeholder="Digite o valor mínimo." id="campoValorMínimo" />
                </FiltrosValores>

                <FiltrosValores>
                    <p>Valor Máximo</p>
                    <input type="number" placeholder="Digite o valor máximo." id="campoValorMáximo" />
                </FiltrosValores>
            </ContainerFiltros>

        )
    }
}