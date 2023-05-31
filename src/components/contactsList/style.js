import styled from "styled-components";

export const SectionTech = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 780px;
  margin: 0 auto;
  margin-top: 3rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    max-width: 850px;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #f8f9fa;
  }

  button {
    background-color: var(--grey-3);
    border-radius: 4px;
    color: #f8f9fa;
    border: none;
    width: 25px;
    height: 25px;
    font-size: 22px;
  }
`;

export const UlTech = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 92%;
  border-radius: 4px;
  background-color: var(--grey-3);
  overflow-y: scroll;
  height: 416.37px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 45%;
    max-width: 150px;
    gap: 40px;
  }

  h3 {
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
    color: #f8f9fa;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey-1);
    width: 180px;
    max-width: 190px;
  }
`;

export const Licontact = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 85%;
  align-items: center;
  max-width: 400px;
  background: var(--grey-4);
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
  }

  :hover {
    background-color: var(--grey-2);
  }
`;
