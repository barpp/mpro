import { Container, Content, BackStory } from "./styles"
import { SlArrowLeft } from "react-icons/sl";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import imgFound from '../../assets/img-achados-perdidos.jpg'

export function LostFound() {
  
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
                <h1>Achados e Perdidos Wyndham®</h1>
              </div>
              <p>
                Serviço disponível em horário comercial de Segunda à Sexta das 8h30min
                12h e das 13h30min às 17h.
              </p>
              <p>
              Entre em contato também por e-mail: <a href="mailto:achadoseperdidos@wyndhamgramadotermas.com"><span>achadoseperdidos@wyndhamgramadotermas.com</span></a>           
              </p>

              <a href="https://bit.ly/achadosperdidoswyndham" target="blank">
                <Button title="Abrir um Chamado"/>
              </a>
            
            </div>
            <div>
              <img src={imgFound} alt="Uma mão segurando uma caneta para assinar um contrato." />
            </div>
          </div>


        </Content>
      </main>
    </Container>
  )
}