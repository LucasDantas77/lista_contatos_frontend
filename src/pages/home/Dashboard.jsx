import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { DivContainer, HeaderDash, NavDash } from "./style";
import { Modal } from "../../components/modalCreate";
import { ContactList } from "../../components/contactsList";

export const DashPage = () => {
  const { user, removeToken, deleteUser } = useContext(UserContext);

  return (
    <DivContainer>
      <NavDash>
        <h1>Lista de contatos</h1>
        <Link to={"/"}>
          <button onClick={removeToken}>Sair</button>
        </Link>
      </NavDash>
      {user && (
        <HeaderDash>
          <h3>olá, {user.name} </h3>
          <span>{user.email}</span>
          <button onClick={deleteUser}>Excluir conta</button>
        </HeaderDash>
      )}
      <ContactList />
      <Modal />
    </DivContainer>
  );
};
