import { Container, Content, BackStory, Table } from "./styles"
import { SlArrowLeft } from "react-icons/sl";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import fracao from "../../assets/fracao.png"
import legfracao from "../../assets/legenda_fracao.png"
import imgquarto from "../../assets/quarto.jpg"


export function PriorityCalendar() {
  
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
                <h1>CALENDÁRIO DE PRIORIDADE DE RESERVA</h1>
              </div>
              <p>
              Aqui você acompanha a prioridade das reservas para o ano de 2025, conforme a 
              letra do seu contrato.
              
              Todas as reservas são realizadas pela Gramado Parks e posteriormente repassadas
              para a Wyndham.
              </p>

              <img src={fracao}/>
              <img src={legfracao}/>

              <Table>
                <thead>
                  <tr>
                    <th>SEMANA DE USO</th>
                    <th>PERÍODO DE USO</th>
                    <th>FASE 1</th>
                    <th>FASE 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="date">15/04/2024 a 19/04/2024</td>
                    <td>2025</td>
                    <td>K</td>
                    <td>J</td>
                  </tr>
                  <tr>
                    <td id="date">22/04/2024 a 26/04/2024</td>
                    <td>2025</td>
                    <td>L</td>
                    <td>K</td>
                  </tr>
                  <tr>
                    <td id="date">29/04/2024 a 03/05/2024</td>
                    <td>2025</td>
                    <td>A</td>
                    <td>L</td>
                  </tr>
                  <tr>
                    <td id="date">06/05/2024 a 10/05/2024</td>
                    <td>2025</td>
                    <td>B</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td id="date">13/05/2024 a 17/05/2024</td>
                    <td>2025</td>
                    <td>C</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td id="date">20/05/2024 a 24/05/2024</td>
                    <td>2025</td>
                    <td>I</td>
                    <td>H</td>
                  </tr>
                  <tr>
                    <td id="date">27/05/2024 a 31/05/2024</td>
                    <td>2025</td>
                    <td>D</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td id="date">03/06/2024 a 07/06/2024</td>
                    <td>2025</td>
                    <td>E</td>
                    <td>D</td>
                  </tr>
                  <tr>
                    <td id="date">10/06/2024 a 14/06/2024</td>
                    <td>2025</td>
                    <td>F</td>
                    <td>E</td>
                  </tr>
                  <tr>
                    <td id="date">17/06/2024 a 21/06/2024</td>
                    <td>2025</td>
                    <td>M</td>
                    <td>F</td>
                  </tr>
                  <tr>
                    <td id="date">24/06/2024 a 28/06/2024</td>
                    <td>2025</td>
                    <td>G</td>
                    <td>M</td>
                  </tr>
                  <tr>
                    <td id="date">01/07/2024 a 05/07/2024</td>
                    <td>2025</td>
                    <td>H</td>
                    <td>G</td>
                  </tr>
                  <tr>
                    <td id="date">08/07/2024 a 12/07/2024</td>
                    <td>2025</td>
                    <td>J</td>
                    <td>I</td>
                  </tr>
                  <tr>
                    <td id="date">15/07/2024 a 19/07/2024</td>
                    <td>2025</td>
                    <td>K</td>
                    <td>J</td>
                  </tr>
                  <tr>
                    <td id="date">22/07/2024 a 26/07/2024</td>
                    <td>2025</td>
                    <td>L</td>
                    <td>K</td>
                  </tr>
                </tbody>
              </Table>

              <a href="https://bit.ly/centralrelgramadoparks2" target="blank">
                <Button title="Realizar Reserva com a Gramado Parks"/>
              </a>

            </div>
            <div>
              <img src={imgquarto}/>
            </div>
          </div>


        </Content>
      </main>
    </Container>
  )
}