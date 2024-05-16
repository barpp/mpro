import { Container } from "./styles";
import { SlArrowRight } from "react-icons/sl";
import { Link } from 'react-router-dom'


export function ButtonMenu({ title, isActive=false, loading = false, route, ...rest }) {
return (
        <Container
            type="button"
            disabled={loading}
            $isactive={isActive.toString()}
            {...rest}
        >
            <div>
                <Link to={route}>    
                    {loading ? "Carregando..." : title}
                    <SlArrowRight />
                </Link>
            </div>
        </Container>
    );
}