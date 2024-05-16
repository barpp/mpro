import { Container, Content, BackStory, Table } from "./styles"
import { SlArrowLeft } from "react-icons/sl";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import imgFound from '../../assets/img-transfer.jpg'

export function Transfer() {
  
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
                <h1>Transfer Gratuito para Proprietários</h1>
              </div>
              <p>
                Você proprietário pode contar com o transfer GRATUITO em diversos horários!
              </p>
              <p>
                Não é necessário agendar horários. O embarque é por ordem de chegada com uma capacidade de até 15 lugares.           
              </p>
              <p>
                Em caso de dúvidas por favor entre em contato com a central de relacionamento clicando no botão abaixo.           
              </p>

              <Table>
                <thead>
                  <tr>
                    <th>SAÍDA DO HOTEL</th>
                    <th>SAÍDA DO CENTRO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>11H</td>
                    <td>11H30</td>
                  </tr>
                  <tr>
                    <td>12H</td>
                    <td>12H30</td>
                  </tr>
                  <tr>
                    <td>17H</td>
                    <td>17H30</td>
                  </tr>
                  <tr>
                    <td>19H</td>
                    <td>19H30</td>
                  </tr>
                  <tr>
                    <td>20H</td>
                    <td>20H30</td>
                  </tr>
                  <tr>
                    <td>21H</td>
                    <td>21H30</td>
                  </tr>
                  </tbody>
              </Table>

              <a href="https://bit.ly/CentralRelacionamentoCondominio" target="blank">
                <Button title="Central de Relacionamento Wyndham®"/>
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