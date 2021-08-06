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

      ul {
        list-style-type: none;
        width: 100%;
        padding: 1rem 0;
        li {
          width: 100%;
          display: flex;
          padding: 1rem 0.5rem;
          &:not(:last-child) {
            border-bottom: 1px solid var(--color-grey-dark-3);
          }

          span {
            width: 35%;
          }
          strong {
            width: 60%;
          }
        }
      }
    }
    &__text {
    }
  }
`;
