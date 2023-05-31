import { Link } from "react-router-dom";
import { FormRegister } from "../../components/formRegister/register";
import { DivCad, DivContainer } from "./style";

export const RegisterPage = () => {
  return (
    <DivContainer>
      <DivCad>
        <h1>Lista de contatos</h1>
        <Link to={"/"}>
          <button>Voltar</button>
        </Link>
      </DivCad>
      <FormRegister />
    </DivContainer>
  );
};
