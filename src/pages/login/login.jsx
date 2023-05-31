import { FormLogin } from "../../components/formLogin/login";
import { DivContainer } from "./styles.js";

export const LoginPage = () => {
  return (
    <DivContainer>
      <h1>Bem vindo !</h1>
      <FormLogin />
    </DivContainer>
  );
};
