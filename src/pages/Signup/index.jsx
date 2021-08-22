// import { BiUser } from "react-icons/bi";
import { FaLock, FaUserAlt, FaEnvelope } from "react-icons/fa";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Social } from "../../components/Social";
import { Content, Container } from "../Signin/styles";
import Panels from "../../components/Panels";

export const SignUp = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Required field"),
    email: yup.string().required("Required field").email(),
    password: yup
      .string()
      .required("Required field")
      .min(8, "Password with at least 8 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };
  return (
    <>
      <Panels path="/">Sign In</Panels>
      <Container>
        <Content>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Sign Up</h2>
            <Input
              label="Username"
              icon={FaUserAlt}
              name="username"
              type="text"
              register={register}
              error={errors.username?.message}
            />
            <Input
              label="Email"
              icon={FaEnvelope}
              name="email"
              type="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              label="Password"
              icon={FaLock}
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
            />
            <Button>sign up</Button>
            <Social>Or sign up with social platforms</Social>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
