import styled from "styled-components";

export const WrapOderPage = styled.div`
  padding: 1rem 2rem;
  .provisinal {
    width: 70%;
    margin: 3rem auto;
    &__header {
      background-color: var(--color-grey-light-3);
      padding: 1rem 1rem;
      text-align: center;
    }
    &__title {
      font-size: 1.8rem;
      text-transform: uppercase;
    }

    #orders {
      border-collapse: collapse;
    }
    #orders td,
    #orders th {
      border: 1px solid #ddd;
      padding: 0 2rem;
    }
    span {
      font-size: 1.8rem;
      font-weight: 600;
    }
  }
`;
