import { Container, Content, BackStory } from "./styles"
import { SlArrowLeft } from "react-icons/sl";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import imgConselho from '../../assets/img-conselho.jpg'

export function Advice() {
  
  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <div>
            <div>
              <div>
                <BackStory>
                  <a href="/">
                    <SlArrowLeft />
                  </a>
                </BackStory>
                <h1>Palavra do Conselho</h1>
              </div>
              <p>
                O conselho consultivo foi constituído com o intuito de ajudar a
                administradora Wyndham® com informações, conselhos e na opinião em
                todos os assuntos sobre o condomínio.
              </p>
              <p>
                Você proprietário pode acessar o grupo do conselho exclusivo para
                proprietários clicando no botão Entrar no Grupo que está disponível
                no seu informativo mensal Saiba mais proprietário.
              </p>
              <p>
                Todos os meses o informativo é disponibilizado pelo seu app Ucondo e
                também é enviado para o email cadastrado no seu contrato.
              </p>
              <p>
                Faça parte do grupo e tenha cada vez mais voz e fique sabendo todos os
                assuntos referentes ao seu condomínio.
              </p>
              <p>
                Maiores informações pelos telefones:
                (54) 3050-1015 ou (54) 9.9267-7074
              </p>
              <p>
                ou clique no botão abaixo para tirar dúvidas com a central de
                relacionamento Wyndham®
              </p>
              

              <a href="https://bit.ly/CentralRelacionamentoCondominio">
                <Button title="Central de Relacionamento Wyndham®"/>
              </a>
            
            </div>
            <div>
              <img src={imgConselho} alt="Uma mão segurando uma caneta para assinar um contrato." />
            </div>
          </div>


        </Content>
      </main>
    </Container>
  )
}