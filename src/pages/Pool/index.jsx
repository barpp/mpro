import { Container, Content, BackStory } from "./styles"
import { SlArrowLeft } from "react-icons/sl";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import imgPool from '../../assets/img-pool-paralelo.jpg'

export function Pool() {
  
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
                <h1>Pool Paralelo</h1>
              </div>
              <p>
                Continua sendo proibida a comercialização da semana de uso de forma direta.
                Denuncie! Isso só prejudica os resultados da sua distribuição. Estamos
                advertindo verbalmente e através de notificações via e-mail a todos os
                infratores e multas estão sendo aplicadas como forma de coibir essa prática.
              </p>
              <p>
                A sua denúncia é anônima.              
              </p>

              <a href="https://bit.ly/denunciepoolparalelo">
                <Button title="Denunciar Pool Paralelo"/>
              </a>
            
            </div>
            <div>
              <img src={imgPool} alt="Uma mão segurando uma caneta para assinar um contrato." />
            </div>
          </div>


        </Content>
      </main>
    </Container>
  )
}