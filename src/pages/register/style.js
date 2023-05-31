import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-4);
  padding-bottom: 22px;
`;

export const DivCad = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8.5rem;
  margin-top: 2rem;

  h1 {
    font-size: 18px;
    color: var(--color-primary);
  }

  button {
    padding: 4px 14px;
    border-radius: 4px;
    border: none;
    background-color: var(--grey-3);
    color: #fff;
  }
`;
