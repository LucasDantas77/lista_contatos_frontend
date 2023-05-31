import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatorio")
    .min(3, "O nome precisa de pelo menos 3 caracteres"),
  email: yup
    .string()
    .required(" O email é obrigatorio")
    .email("o email digitado é invalido"),
  password: yup
    .string()
    .required("Senha obrigatoria")
    .min(6, "A senha precisa de pelo menos 6 caracteres"),
  passwordConfirm: yup
    .string()
    .required("Este campo é obrigatorio")
    .oneOf([yup.ref("password"), null], "A senha não confere"),
  fone: yup.number().required("Telefone obrigatorio"),
});
