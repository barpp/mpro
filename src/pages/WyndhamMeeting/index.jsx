import { Container, Content, BackStory } from "./styles"
import { SlArrowLeft } from "react-icons/sl";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import imgEncontro from '../../assets/img-encontro-wyndham.jpg'

export function WyndhamMeeting() {
  
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
                <h1>Encontro com a Wyndham®</h1>
              </div>
              <p>
                Que tal um café?
              </p>
              <p>
                Queremos saber como é a sua estada aqui, na sua casa de férias!
              </p>
              <p>
              Todas as quartas-feiras durante a sua semana de uso, você pode ir
              até a recepção no espaço do proprietário das 10h às 13h para conversar
              e saber mais sobre como a Wyndham está gerindo o seu empreendimento,
              esclarecer suas dúvidas e compartilhar as suas ideias.
              </p>
              <p>
                Venha tomar um café conosco e nos ajude a fazer do seu empreendimento,
                o seu melhor lugar.
              </p>
              

              <a href="https://bit.ly/CentralRelacionamentoCondominio">
                <Button title="Central de Relacionamento Wyndham®"/>
              </a>
            
            </div>
            <div>
              <img src={imgEncontro} alt="Uma mão segurando uma caneta para assinar um contrato." />
            </div>
          </div>


        </Content>
      </main>
    </Container>
  )
}