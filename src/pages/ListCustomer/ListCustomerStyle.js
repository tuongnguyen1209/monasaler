import styled from "styled-components";

export const WraperListCustomer = styled.div`
  padding: 1rem 2rem;
  /* position: relative;
  .subheader {
    display: flex;
    position: absolute;
  } */
  .list-customer {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
  }
  .customer {
    margin-top: 1rem;
    width: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem;

    &__box {
      margin-top: 1rem;
      width: 100%;
      background-color: var(--color-grey-light-2);
      padding: 1rem;
      font-weight: 500;
      font-size: 1.6rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      /* & > *:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-dark-3);
      } */
      position: relative;
      &--edit {
        width: 100%;
        cursor: pointer;
        &-icon {
          position: absolute;
          right: 1rem;
          color: var(--color-primary);
        }
      }
      & > *:not(:last-child) {
        margin-bottom: 0.5rem;
      }
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
  .btn-box {
    position: fixed;
    bottom: 15%;
    right: 30px;
    button {
      padding: 15px;
      border-radius: 50%;
      border: none;
      background-color: var(--color-primary);
      color: wheat;
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 9rem;
    .customer {
      width: 100%;
    }
    .search {
      &__input {
        width: 95%;
        margin-left: -2rem;
        &:focus {
          width: 95%;
        }
      }
    }
  }
`;
