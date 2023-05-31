import styled from "styled-components";

export const FormLog = styled.form`
  width: 80%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  background-color: var(--grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 42px 22px;

  h3{
    text-align: center;
    color: #f8f9fa;
  }

  label {
    font-weight: 400;
    font-size: 9.772px;
    color: #f8f9fa;
  }

  input {
    width: 87%;
    max-width: 329px;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    padding: 8px 16.2426px;
    background-color: var(--grey-2);
  }

 

  p {
    font-size: 14px;
    margin: 0 auto;
    color: var(--grey-1);
  }

  span{
    font-size: 12px;
    color: var(--negative);
  }
`;


export const Button = styled.button `
    width: 100%;
    max-width: 330px;
    background-color: var(--color-primary);
    color: #fff;
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    padding: 10px 22px;

`

export const ButtonRegister= styled(Button)`
  background-color: var(--grey-1);
  border: 1px solid var(--grey-1);
 
`;
