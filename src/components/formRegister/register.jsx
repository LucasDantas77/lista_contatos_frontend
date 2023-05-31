import { FormReg } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../schemas/registerSchema";
import { UserContext } from "../../Contexts/UserContext";

export const FormRegister = () => {
  const { submitRegister, loading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });
  return (
    <FormReg onSubmit={handleSubmit(submitRegister)}>
      <h2>Crie sua conta</h2>
      <p>Rapido e gratis, vamos nessa</p>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        placeholder="Digite seu nome"
        disabled={loading}
        {...register("name")}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        placeholder="Digite seu email"
        disabled={loading}
        {...register("email")}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <label htmlFor="password">Senha</label>
      <input
        name="password"
        type="password"
        placeholder="Digite sua senha"
        disabled={loading}
        {...register("password")}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <label htmlFor="passwordConfirm">Confirmar Senha</label>
      <input
        name="passwordConfirm"
        type="password"
        placeholder="Digite Novamente Sua Senha"
        disabled={loading}
        {...register("passwordConfirm")}
      />
      {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
      <label htmlFor="fone">Telefone</label>
      <input
        name="fone"
        type="number"
        placeholder="Digite seu telefone"
        disabled={loading}
        {...register("fone")}
      />
      {errors.fone && <span>{errors.fone.message}</span>}
      <button type="submit" disabled={loading}>
        {loading ? "Cadastrando" : "Cadastrar"}
      </button>
    </FormReg>
  );
};
