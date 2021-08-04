// import { BiUser } from "react-icons/bi";
import { FaLock, FaUserAlt, FaEnvelope } from "react-icons/fa";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Social } from "../../components/Social";
import { Content, Container } from "../Signin/styles";

export const Signin = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Required field"),
    email: yup.string().required("Required field").email(),
    password: yup.string().required("Required field").min(8,"Password with at least 8 characters"),
  });

  const {
    register,
    handleSubmite,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmite(onSubmitFunction)}>
          <h2>Sign Up</h2>
          <Input
            label="Username"
            icon={FaUserAlt}
            name="username"
            register={register}
            error={errors.username?.message}
          />
          <Input
            label="Email"
            icon={FaEnvelope}
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            icon={FaLock}
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <Button>sign up</Button>
          <Social>Or sign up with social platforms</Social>
        </form>
      </Content>
    </Container>
  );
};

//minuto 9:55