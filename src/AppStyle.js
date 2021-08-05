import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1025px) {
    max-width: 90rem;
  }
`;

export const WrapContent = styled.div`
  flex: 1;
  padding-bottom: 10%;
  background-color: white;
`;
