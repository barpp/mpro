import { Container, Content, BackStory } from "./styles"
import { SlArrowLeft } from "react-icons/sl";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import imgDocCriancas from '../../assets/img-doc-criancas.jpg'

export function Minor() {
  
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
                <h1>Documentação para Menores de Idade</h1>
              </div>
              <p>
                Proprietários, evitem transtornos e atrasos em seu check-in,
                tenham sempre em mãos a documentação das crianças menores de idade.
                Lembramos a obrigatoriedade legal da apresentação dos mesmos durante
                sua entrada (Resolução 295/2019, do Conselho Nacional de Justiça(CNJ)).
              </p>
              <p>
                Torne a sua estadia tranquila e aproveite a sua casa de férias.
              </p>
              <p>
                Dúvidas, por favor entre em contato com a central de relacionamento clicando no botão.
              </p>
              <a href="https://bit.ly/CentralRelacionamentoCondominio">
                <Button title="Acesse o termo de Cessão de Uso"/>
              </a>
            </div>
            <div>
              <img src={imgDocCriancas} alt="Uma Criança com uma boia e óculos de sol na piscina" />
            </div>
          </div>


        </Content>
      </main>
    </Container>
  )
}