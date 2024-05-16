import { Container, Content, BackStory } from "./styles"
import { SlArrowLeft } from "react-icons/sl";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import imgIptu from '../../assets/img-iptu.jpg'


export function IPTU() {
  
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
                <h1>IPTU 2024</h1>
              </div>
              <p>
                Caso tenha recebido alguma notificação de cobrança sobre o IPTU da sua unidade,
                guia de pagamento, carnê ou notificação da sua casa de férias, pedimos que a cobrança
                seja encaminhada para o condomínio. O valor do mesmo é incluso em sua taxa de condomínio mensal.
              </p>
              <p>
                Caso o pagamento já tenha sido efetuado, entre em contato com a Central de Relacionamento,
                para a programação da devolução dos seus valores.
              </p>
              <p>
                Agradecemos a compreensão e em caso de dúvidas, estamos à disposição.
              </p>
              <a href="https://bit.ly/CentralRelacionamentoCondominio">
                <Button title="Central de Relacionamento Wyndham®"/>
              </a>
            </div>
            <div>
              <img src={imgIptu} alt="Imagem aérea do hotel Wyndham Gramado Termas" />
            </div>
          </div>


        </Content>
      </main>
    </Container>
  )
}