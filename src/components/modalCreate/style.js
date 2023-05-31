import styled from "styled-components";

export const BackgroundDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: transparent;
`;

export const DivContainer = styled.div`
  width: 80%;
  max-width: 369px;
  height: 350px;
  display: flex;
  margin: 0 auto;
  margin-top: 7rem;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--grey-3);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: var(--grey-2);
  width: 90%;
  padding: 10px 17px;
  border-radius: 3.20867px;

  p {
    font-weight: 700;
    font-size: 11.2304px;
    line-height: 19px;
    color: #f8f9fa;
  }

  button {
    background-color: var(--grey-2);
    border: none;
    color: #f8f9fa;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;

  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    max-width: 450px;
    margin-right: 1rem;
  }

  label {
    font-weight: 400;
    font-size: 12.182px;
    color: #f8f9fa;
  }

  input {
    width: 92%;
    max-width: 900px;
    padding: 8px;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    background-color: var(--grey-2);
  }

  select {
    width: 100%;
    max-width: 310px;
    padding: 8px;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    background-color: var(--grey-2);
    color: #f8f9fa;
  }

  button {
    width: 100%;
    max-width: 310px;
    padding: 8px;
    background-color: var(--color-primary);
    border-radius: 4px;
    border: 1.2182px solid var(--color-primary);
    color: #f8f9fa;
    margin-top: 20px;
  }
`;
