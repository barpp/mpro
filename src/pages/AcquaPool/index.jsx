import { Container, Content, BackStory } from "./styles"
import { SlArrowLeft } from "react-icons/sl";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import imgAcquaPool from '../../assets/img-piscinas.jpg'

export function AcquaPool() {
  
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
                <h1>Horários das Piscinas</h1>
              </div>
              <p>
                Você sabia que aqui o seu empreendimento é o único
                com piscinas e jacuzzis de águas termais? Isso mesmo!
              </p>

              <h2>Água Termal</h2>
              <p>
                A água termal  possui propriedades minerais como fluoretação,
                sulfatação e litinação, sendo hipertermal na fonte. A água sulfatada
                tem ação anti-inflamatória e antitóxica, enquanto o lítio auxilia na
                prevenção de problemas neurológicos e na depuração de ácido úrico.
              </p>
              <p>
                Os benefícios da água termal incluem ação antioxidante, calmante,
                alívio de dores e proteção da pele contra agressões da poluição.
              </p>
              <p>
                Sua temperatura média é de 40ºC, proveniente de uma profundidade de 850m do solo, com um pH de 8.0
              </p>
              <h2>Horário de Funcionamento</h2>
              <p>
                O horário de funcionamento das piscinas e jacuzzis é de Segunda à Sábado das 10h às 22h. Aos Domingos das 9h às 22h.
              </p>
              <p>
                Aproveite todos os benefícios que só a água termal lhe proporciona, e água termal você tem só aqui no seu Wyndham Gramado Termas Resort & SPA
              </p>
              

              <a href="https://bit.ly/CentralRelacionamentoCondominio">
                <Button title="Central de Relacionamento Wyndham®"/>
              </a>
            
            </div>
            <div>
              <img src={imgAcquaPool} alt="Uma mão segurando uma caneta para assinar um contrato." />
            </div>
          </div>


        </Content>
      </main>
    </Container>
  )
}