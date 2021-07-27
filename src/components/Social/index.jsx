import { Link } from "react-router-dom"
import { FaFacebookF,FaTwitter,FaGoogle,FaLinkedinIn} from "react-icons/fa"
export const Social = () => {
    return (
        <Container>
            <p>Or sign in with social platforms</p>
            <Link><FaFacebookF/></Link>
            <Link><FaTwitter/></Link>
            <Link><FaGoogle/></Link>
            <Link><FaLinkedinIn/></Link>
        </Container>
    )
}