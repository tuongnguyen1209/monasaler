import styled from "styled-components";

export const WraperProduct = styled.div`
  background-color: var(--color-light);
  padding: 1rem 2rem;
  .body {
    padding: 1rem 0;
    &__text {
      color: var(--color-grey-dark-1);
      font-size: 1.8rem;
    }
    &__item {
      margin: 1rem 0;
      padding: 1rem 1rem;
      border-radius: 1rem;
      text-align: center;
      cursor: pointer;
      box-shadow: var(--shadow-light);
      background-image: linear-gradient(
        to right,
        var(--color-primary-2),
        var(--color-primary)
      );

      font-size: 2rem;
      text-transform: uppercase;
      color: var(--color-light);
      font-weight: 600;
    }
  }
`;
