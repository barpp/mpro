import { Container, Content, BackStory } from "./styles"
import { SlArrowLeft } from "react-icons/sl";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'


import imgAtendimento from '../../assets/CentralRelacionamento.jpg'

export function ServiceChannel() {
  
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
                <h1>Canais de Atendimento Wyndham®</h1>
              </div>
             
              <h2>Central de Relacionamento Wyndham® Gramado Termas</h2>
              <p>
                Assuntos referentes a: Cadastro Ucondo, Emissão de Boletos
                e 2ª via de Boletos, Informações sobre o Pool (Distribuição e Reservas).
              </p>
              <p id="contact">
                Telefone fixo: (54) 3050-1017 ou (54) 3050-1016 ou (54) 3050-1015
                e-mail: condominio@wyndhamgramadotermas.com
                site: www.wyndhamgramadotermas.com
              </p>
              <p>
                Atendimento de Segunda à Quinta das 8h às 18h e Sextas das 8h às 17h.
              </p>
              
              <a href="https://bit.ly/CentralRelacionamentoCondominio">
                <Button title="Central de Relacionamento Wyndham®"/>
              </a>
            
              <h2>Central de Relacionamento Gramado Parks</h2>
              <p>
                Assuntos referentes a: Alterações de cadastro, emissão de
                boletos cota, 2ª via de boleto da cota, escrituração.
              </p>
              <p id="contact">
                Telefones: (54) 3905-4800 ou WhatsApp (54) 3905-4885
                e-mail: relacionamento@gramadoparks.com
              </p>
              
              <a href="https://bit.ly/reservasdasemanawyndham">
                <Button title="Central de Relacionamento Gramado Parks"/>
              </a>

              <h2>Central de Relacionamento Gramado Parks</h2>
              <p>
                Assuntos referentes a: Reservas, distribuição, reservas RCI.
              </p>
              <p id="contact">
                Telefones: (54) 3905-4888 ou WhatsApp (54) 9.9975-1683
                e-mail: crc@wyndhamgramadotermas.com
              </p>
              
              <a href="https://bit.ly/centralrelgramadoparks2">
                <Button title="Central de Relacionamento Gramado Parks"/>
              </a>


            </div>
            <div>
              <img src={imgAtendimento} alt="Uma mão segurando uma caneta para assinar um contrato." />
            </div>
          </div>


        </Content>
      </main>
    </Container>
  )
}