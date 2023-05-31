import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BackgroundDiv, DivContainer, DivForm, DivHeader } from "./style";
import { ContactContext } from "../../Contexts/Contacts";
import { ConatactSchema } from "../../schemas/contactSchema";

export const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ConatactSchema),
  });

  const { modal, setModal, submitContact } = useContext(ContactContext);
  if (!modal) {
    return null;
  }

  return (
    <BackgroundDiv>
      <DivContainer>
        <DivHeader>
          <p>Cadastrar contato</p>
          <button onClick={() => setModal(false)}>x</button>
        </DivHeader>
        <DivForm>
          <form onSubmit={handleSubmit(submitContact)}>
            <label htmlFor="name">Nome</label>
            <input
              name="name"
              type="text"
              placeholder="nome"
              {...register("name")}
            />

            {errors.name && <span>{errors.name.message}</span>}
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="email"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <label htmlFor="fone">Telefone</label>
            <input
              name="fone"
              type="number"
              placeholder="Digite seu telefone"
              {...register("fone")}
            />
            <button type="submit">Cadastrar Contatos</button>
          </form>
        </DivForm>
      </DivContainer>
    </BackgroundDiv>
  );
};
