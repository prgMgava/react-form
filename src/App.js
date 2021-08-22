import Routes from "../src/routes";
import { useSignIn } from "./Provider";
import { Container } from "./style";
import GlobalStyle from "./styles/global";
function App() {
  const { isSignIn } = useSignIn();

  return (
    <>
      <GlobalStyle />
      <Container isSignIn={isSignIn}>
        <Routes />
      </Container>
    </>
  );
}

export default App;
