import styled from "styled-components";

export const WraperListCustomer = styled.div`
  padding: 1rem 2rem;

  .customer {
    margin-top: 5rem;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    &__box {
      width: 60%;
      border: 1px solid var(--color-grey-dark-3);
      border-radius: 1rem;

      padding: 2rem 2rem;
      font-weight: 500;
      font-size: 1.6rem;
    }
    &__name {
      font-weight: bold;
    }
    &__address {
      text-transform: uppercase;
    }
    &__email {
    }
    &__phone {
      font-weight: bold;
    }
  }
  .search {
    padding-top: 3rem;
    width: 100%;
    text-align: center;

    &__input {
      background-color: var(--color-grey-light-3);
      padding: 1rem 2rem;
      border: none;
      border-radius: 100px;
      width: 65%;
      margin-right: -1.25rem;
      font-size: 1.8rem;

      &:focus {
        outline: none;
        width: 70%;
        background-color: var(--color-grey-light-3);
      }

      &::-webkit-input-placeholder {
        font-weight: 100;
        color: var(--color-grey-dark-3);
      }
    }

    &__button {
      border: none;
      background-color: var(--color-grey-light-2);
      cursor: pointer;
      margin-left: -2rem;
      &:focus {
        outline: none;
      }
    }
    &__icon {
      color: var(--color-grey-dark-3);
      font-size: 1.8rem;
    }
  }
`;
