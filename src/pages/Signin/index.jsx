// import { BiUser } from "react-icons/bi";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Content } from "./styles";
import { Button } from "../../components/Button";
import { Social } from "../../components/Social";
import Panels from "../../components/Panels";
import { useSignIn } from "../../Provider";

export const SignIn = () => {
  const { isSignIn } = useSignIn();
  const schema = yup.object().shape({
    username: yup.string().required("Required field"),
    password: yup.string().required("Required field"),
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
      <Container isSignIn={isSignIn}>
        <Content isSignIn={isSignIn}>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Sign In</h2>
            <Input
              label="Username"
              icon={FaUserAlt}
              name="username"
              register={register}
              error={errors.username?.message}
              type="text"
            />
            <Input
              label="Password"
              type="password"
              icon={FaLock}
              name="password"
              register={register}
              error={errors.password?.message}
            />
            <Button>login</Button>
            <Social>Or sign in with social platforms</Social>
          </form>
        </Content>
      </Container>
      <Panels panelDirection path="/signup">
        Sign Up
      </Panels>
    </>
  );
};

export default SignIn;
