import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./style";

export function Header(){

    return (
        <Container>
            <Profile>
                <img src="https://github.com/barpp.png" alt="Foto do Usuário"/>

                <div>
                    <span>Wyndham® Gramado Termas Resort & SPA</span>
                    <strong>MultiPro</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
            
        </Container>

    )
}