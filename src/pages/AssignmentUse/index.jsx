import { Container, Content, BackStory } from "./styles"
import { SlArrowLeft } from "react-icons/sl";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import imgTermo from '../../assets/img-termo-cessao.jpg'

export function AssignmentUse() {
  
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
                <h1>Cessão de Uso</h1>
              </div>
              <p>Proprietário, lembramos a obrigatoriedade da entrega do 
                "Termo de Cessão de Uso" (devidamente assinado e reconhecido)
                na recepção para efetivação do check-in, quando "ceder" sua semana
                de uso para familiares e amigos. Evite transtornos a seus convidados.
              </p>
              <a href="https://bit.ly/termocessaowyndham">
                <Button title="Acesse o termo de Cessão de Uso"/>
              </a>
            </div>
            <div>
              <img src={imgTermo} alt="" />
            </div>
          </div>


        </Content>
      </main>
    </Container>
  )
}