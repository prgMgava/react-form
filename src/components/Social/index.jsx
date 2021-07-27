import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Container, Content } from "./styles";

export const Social = ({ children }) => {
  return (
    <Container>
      <p>{children}</p>
      <Content>
        <Link>
          <FaFacebookF />
        </Link>
        <Link>
          <FaTwitter />
        </Link>
        <Link>
          <FaGoogle />
        </Link>
        <Link>
          <FaLinkedinIn />
        </Link>
      </Content>
    </Container>
  );
};

//CONTAINER PODE DAR RUIM POIS NAO EXISTE
