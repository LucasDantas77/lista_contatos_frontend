import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: var(--grey-4);
  
`;

export const NavDash = styled.nav`
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  border-bottom: 1px solid var(--grey-2);

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

export const HeaderDash = styled.header`
  display: flex;
  justify-content: space-around;
  height: 80px;
  padding: 10px 95px;
  border-bottom: 1px solid var(--grey-2);
  align-items: center;
  flex-direction: column;
  text-align: center;

  h3 {
    color: #f8f9fa;
    font-size: 18px;
    font-weight: 700px;
  }

  span {
    color: var(--grey-1);
    font-size: 12px;
    font-weight: 400;
    width: 230px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
