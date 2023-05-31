import * as yup from "yup";

export const ConatactSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatorio")
    .min(3, "O nome precisa de pelo menos 3 caracteres"),
  email: yup
    .string()
    .required(" O email é obrigatorio")
    .email("o email digitado é invalido"),
  fone: yup.number().required("Telefone obrigatorio"),
});
