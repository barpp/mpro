import { Section } from './styles'
import { Button } from '../../components/Button'


export function BannerList(props) {
    return (
        <Section>
            <li>
                <h2>{props.title}</h2>
                <img src={props.image} alt={props.alt}/>
                <a href={props.href} target="blank">
                <Button title={props.ButtonTitle}/>
                </a>
            </li>
        </Section>        

    )
}


