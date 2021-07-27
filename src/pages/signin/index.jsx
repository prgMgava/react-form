// import { BiUser } from "react-icons/bi";
import {FaLock, FaUserAlt} from "react-icons/fa"
import { Input } from "../../components/input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Signin = () => {
    const schema = yup.object().shape({
        username:yup.string().required("Required field"),
        password:yup.string().required("Required field")
    });
    
    const {register, handleSubmite, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = data => {
        console.log(data)
    }
  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmite(onSubmitFunction)}>
          <h2>Sign In</h2>
          <Input
            label="Username"
            icon={FaUserAlt}
            name="username"
            register={register}
            error={errors.username?.message}
          />
          <Input 
           label="Password"
           icon={FaLock}
           name="password"
           register={register}
           error={errors.password?.message}/>
        </form>
      </Content>
    </Container>
  );
};
