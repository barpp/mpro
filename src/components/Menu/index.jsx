import { ItemsMenu } from "./style";
import { ButtonMenu } from "../ButtonMenu";


export function ItemMenu(){
    return (
        <ItemsMenu>
            <li><ButtonMenu title="FAQ" route="/faq"/></li>
            <li><ButtonMenu title="Cessão de Uso" route="/assignmentuse"/></li>
            <li><ButtonMenu title="IPTU 2024" route="/iptu"/></li>
            <li><ButtonMenu title="Calendário de Reservas" route="/prioritycalendar"/></li>
            <li><ButtonMenu title="Doc. menores" route="/minor"/></li>
            <li><ButtonMenu title="Pool paralelo" route="/pool"/></li>
            <li><ButtonMenu title="Desc. p/ Proprietários" route="/discount" /></li>
            <li><ButtonMenu title="Transfer Gratuito" route="/transfer" /></li>
            <li><ButtonMenu title="Achados e Perdidos" route="/lostfound"/></li>
            <li><ButtonMenu title="Wyndham Green®" route="/wyndhamgreen"/></li>
            <li><ButtonMenu title="Encontro com Wyndham®" route="/wyndhammeeting"/></li>
            <li><ButtonMenu title="Horários Piscinas" route="/acquapool" /></li>
            <li><ButtonMenu title="Conselho Consultivo" route="/advice"/></li>
            <li><ButtonMenu title="Canais de Atendimento" route="/servicechannel"/></li>
        </ItemsMenu>
    )
}