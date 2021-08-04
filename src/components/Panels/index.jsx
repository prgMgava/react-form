import { Button } from "../Button"
import LogImage from "../../assets/img/log.svg"
import { Container, Panel } from "./styles";

const Panels = () => {
    return (
        <Container>
            <Panel panelDirection={panelDirection}>
                <Content>
                    <h3>New here?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi accusantium itaque nobis recusandae fugiat temporibus debitis doloribus numquam fugit.</p>
                    <Button>Sign Up</Button>
                </Content>
                <img src={LogImage} alt="Login"/>
            </Panel>
        </Container>
    )
}

export default Panels;

//botao tem schema
//panel eschema
// preciso de um state com ternario