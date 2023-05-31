import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ButtonRegister, FormLog, Button } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { LoginSchema } from "../../schemas/loginSchema";
import { UserContext } from "../../Contexts/UserContext";
export const FormLogin = () => {
  const { submitLogin, loading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  return (
    <FormLog onSubmit={handleSubmit(submitLogin)}>
      <h3>Login</h3>
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
      <Button type="submit" disabled={loading}>
        {loading ? "Carregando..." : "Entrar"}
      </Button>
      <p>Ainda não possui uma conta ?</p>
      <Link to={"/register"}>
        <ButtonRegister type="submit">Cadastrar</ButtonRegister>
      </Link>
    </FormLog>
  );
};
