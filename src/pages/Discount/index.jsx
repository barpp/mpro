import { Container, Content, BackStory } from "./styles"
import { SlArrowLeft } from "react-icons/sl";
import { Link } from 'react-router-dom'

import { Section } from '../../components/Section'
import { BannerList } from '../../components/BannerList'

import imgFound from '../../assets/img-desconto-props.jpg'



const bannersListData = [
  {
              title: "Tarifas extras com desconto o ano inteiro",
              imgsrc: "../../../public/bnr_desconto-props.jpg",
              alt:"Propaganda de descontos nas tarifas para proprietários",
              href:"https://bit.ly/descontotarifawyndham",
              ButtonTitle: "Solicitar Reserva",
  },
  {
              title: "Acqua Motion - Ingresso incluso na taxa de condomínio",
              imgsrc: "../../../public/bnr_acqua-motion.jpg",
              alt:"Propaganda do parque aquático Acqua Motion",
              href:"https://bit.ly/AtendimentoWindy",
              ButtonTitle: "Central de Relacionamento Wyndham®",
  },
]


export function Discount() {
  
  return (
    <Container>
      
      <main>
        <Content>
          <div>
            <div>
              <div>
                <BackStory>
                  <Link to="/">
                    <SlArrowLeft />
                  </Link>
                </BackStory>
                <h1>Descontos para Proprietários</h1>
              </div>
              <p>
                Veja aqui alguns dos vários benefícios que só o proprietário do 
                Wyndham® Gramado Termas Resort & SPA tem!
              </p>
              <Section/>
                {
                  bannersListData.map(function(item) {
                    return (
                      <BannerList
                        title={item.title}
                        image={item.imgsrc}
                        alt={item.alt}
                        href={item.href}
                        ButtonTitle={item.ButtonTitle}  
                      />
                    )
                  })
                }
              
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