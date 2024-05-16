import { Container, Content, BackStory } from "./styles"
import { SlArrowLeft } from "react-icons/sl";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import imgWyngreen from '../../assets/img-wyndham-green.jpg'
import bnrWyndhamGreen from '../../assets/bnr_wyndham-green.jpg'

export function WyndhamGreen() {
  
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
                <h1>Wyndham® Green</h1>
              </div>
              <p>
                A sua unidade é EXEMPLO!
              </p>
              <p>
                O programa Wyndham Green® é um programa de gestão ambiental e de 
                sustentabilidade da rede Wyndham, a qual a sua unidade de Gramado, 
                através de suas ações internas, incluindo o consumo e gestão de atividades 
                voltadas à sustentabilidade e meio ambiente, obteve a CERTIFICAÇÃO NÍVEL 5 
                (Certificação Máxima), como primeira unidade no Brasil que atingiu todas as 
                metas de implantação e manutenção dos critérios do programa.
              </p>
              <p>
                Parabéns Proprietário pelo incentivo a ações que trazem mais sustentabilidade e cuidado ao meio ambiente.
              </p>

              <img src={bnrWyndhamGreen} alt="Selos do programa Wyndham Green"/>

              <a href="https://bit.ly/CentralRelacionamentoCondominio">
                <Button title="Central de Relacionamento Wyndham®"/>
              </a>

            
            </div>
            <div>
              <img src={imgWyngreen} alt="Uma mão segurando uma caneta para assinar um contrato." />
            </div>
          </div>


        </Content>
      </main>
    </Container>
  )
}