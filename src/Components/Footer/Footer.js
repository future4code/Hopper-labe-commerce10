import React, { Component } from "react";
import styled from 'styled-components'


const ContainerFooter = styled.div`
display: flex;
justify-content: space-evenly;
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


const RedesSociais = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 50px 20px;

`

const ImgNome = styled.img`
    height: 50px;
    width: 120px;
    
`

const ImgRedes = styled.img`
    height: 30px;
    width: 30px;
    margin: 10px 7px;
`

const Text = styled.p`
    text-decoration: underline;
`



const Recompensas = styled.div`
    display: flex;
    align-items: center;
    

    img{
        height: 70px;
        width: 70px;
        margin-right: 20px;
    }

    h3{
        text-decoration: underline;
    }
`


const Exclusivos = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
    

    h5{
        line-height: 1.5;
    }

`


const Pagamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3{
        text-decoration: underline;
    }
`

const ImgPgtos = styled.img`
    height: 50px;
    width: 50px;
    margin: 10px 5px;
`

const ContainerExclusivos = styled.div`
margin-top: 30px;
`

const FooterInfos = styled.div`
    margin: 20px 50px;
    display: flex;
    justify-content: center;

`

const ContainerTotal = styled.div`
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

const FormaDePagamentos = styled.div`
 margin-top: 50px;
`







export default class Footer extends Component {
    render() {
        return (
            <ContainerTotal>
                <ContainerFooter>
                    <RedesSociais>
                        <ImgNome src="img/space-t.png"></ImgNome>
                        <div>
                            <ImgRedes src="img/instagramm.png"></ImgRedes>
                            <ImgRedes src="img/facebookk.png"></ImgRedes>
                            <ImgRedes src="img/youtube-logotype.png"></ImgRedes>
                        </div>
                        <div>
                            <p>
                                Atendimento Online<br />
                                De segunda a sexta, das 8h às 18h.</p>
                        </div>
                        <div>
                            <Text>Fale Conosco | Chat Space T-shirts</Text>
                        </div>
                    </RedesSociais>

                    <ContainerExclusivos>
                        <Exclusivos>
                            <Recompensas>
                                <img src="img/entrega-rapida.png"></img>
                                <h3>Frete Grátis</h3>
                            </Recompensas>
                            <h5>
                                Em todos os pedidos<br />
                                acima de R$150 para as<br />
                                regiões Sul e Sudeste.<br />
                                R$200 para as demais regiões.
                            </h5>
                        </Exclusivos>

                        <Exclusivos>
                            <Recompensas>
                                <img src="img/cartao-de-credito.png"></img>
                                <h3>6x no Cartão de Crédito</h3>
                            </Recompensas>
                            <h5>
                                Compre parcelado com<br />
                                cartão ou a vista com<br />
                                boleto ou depósito.
                            </h5>

                        </Exclusivos>

                        <Exclusivos>
                            <Recompensas>
                                <img src="img/caixa-de-devolucao.png"></img>
                                <h3>1ª troca grátis</h3>
                            </Recompensas>
                            <h5>
                                Sua primeira troca na<br />
                                Space T-shirts é por nossa<br />
                                conta!
                            </h5>
                        </Exclusivos>
                    </ContainerExclusivos>

                    <FormaDePagamentos>
                        <Pagamento>
                            <h3>Formas de Pagamento</h3>
                            <div>
                                <ImgPgtos src="img/apple-pay.png"></ImgPgtos>
                                <ImgPgtos src="img/maestro.png"></ImgPgtos>
                                <ImgPgtos src="img/visa.png"></ImgPgtos>
                            </div>
                        </Pagamento>
                        <Pagamento>
                            <h3>Certificados</h3>
                            <div>
                                <ImgPgtos src="img/certificado-de-garantia.png"></ImgPgtos>
                                <ImgPgtos src="img/shield.png"></ImgPgtos>
                            </div>
                        </Pagamento>
                    </FormaDePagamentos>

                </ContainerFooter>

                <FooterInfos>
                    <h6>
                        A Space T-Shirts é o maior site para comprar camisetas criativas e personalizadas do Brasil . Mais de 2.700 designs de camisas diferenciados, garanta a sua! Desenvolvemos camisetas criativas,<br />
                        muita moda e arte! Venha nos visitar: Rua Um Dois Três Quatro, 000 - São Nunca - AM / Bairro Algum Por Ai / CEP: 88888 - 000  CNPJ 00.100.001/0001-00.
                    </h6>
                </FooterInfos>



            </ContainerTotal>
        )
    }
}