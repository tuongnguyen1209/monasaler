import styled from "styled-components";

export const WraperProduct = styled.div`
  background-color: var(--color-light);
  padding: 1rem 2rem;
  .body {
    padding: 1rem 0;
    &__text {
      color: var(--color-grey-dark-1);
      font-size: 1.8rem;
      &.text-hidden {
        display: none;
      }
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
      width: 60%;
      margin-right: -1.25rem;
      font-size: 1.8rem;
      transition: all 0.2s;
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
  .product-list {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .product {
    width: 50%;
    padding: 1rem 1rem;
    display: flex;
    a {
      display: flex;
      border: 1px solid var(--color-grey-light-4);
      border-radius: 1rem;
      padding: 1rem 1rem;
      width: 100%;
    }
    &__img {
      width: 30%;
      img {
        width: 100%;
      }
    }
    &__name {
      font-weight: 600;
      font-size: 1.8rem;
      padding: 2rem 0;
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 6rem;
    .search {
      &__input {
        width: 95%;
        margin-left: -1.5rem;
        &:focus {
          width: 100%;
        }
      }
    }
    .product-list {
      /* flex-direction: column; */
    }
    .product {
      width: 100%;
      &__name {
        font-size: 1.6rem;
      }
    }
  }
`;
