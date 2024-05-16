import { Container } from "./style";

export function Section(props) {
    return (
        <Container>                
            <ul> {props.children} </ul>     
        </Container>
    );
}
