import styled from "styled-components";

export const WrapProductInfo = styled.div`
  padding: 1rem 2rem;
  .product {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    &__name {
      width: 100%;
      color: var(--color-primary);
    }
    &__img {
      margin: 2rem 1rem;
      border: 1px solid var(--color-grey-light-4);
      border-radius: 2rem;
      box-shadow: var(--shadow-dark);
    }
    &__details {
      font-size: 1.8rem;
    }
    &__text {
    }
  }
`;
