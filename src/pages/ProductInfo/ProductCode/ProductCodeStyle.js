import styled from "styled-components";

export const WraperProductCode = styled.div`
  padding: 1rem 2rem;

  .text-box {
    margin-top: 5rem;
    width: 100%;
    text-align: center;
    &__manual {
      font-size: 1.8rem;
    }
  }

  .form-search {
    margin-top: 3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    &__input {
      font-size: 1.8rem;
      padding: 1.5rem 2rem;
      width: 50%;
      border: 1px solid var(--color-grey-dark-3);
      border-radius: 1rem;
      outline: none;
      ::-webkit-input-placeholder {
        text-align: center;
      }
    }

    &__button {
      margin-top: 1rem;
      font-size: 1.7rem;
      text-transform: uppercase;
      color: var(--color-light);
      font-weight: 600;
      padding: 1.5rem 2rem;
      cursor: pointer;

      width: 50%;
      border: 1px solid var(--color-grey-dark-3);
      border-radius: 1rem;
      outline: none;
      background-image: linear-gradient(
        to right,
        var(--color-primary-2),
        var(--color-primary)
      );
    }
  }
  .img-box {
    margin: 3rem auto;
    text-align: center;
    align-items: center;
    width: 50%;

    border: 1px solid var(--color-grey-dark-3);
    border-radius: 1rem;
    &__img {
      padding: 1rem;
      width: 90%;
    }
  }
`;
