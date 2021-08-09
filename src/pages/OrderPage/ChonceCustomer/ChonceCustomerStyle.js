import styled from "styled-components";

export const WrapChonce = styled.div`
  padding: 1rem;
  h3 {
    width: 100%;
    color: var(--color-primary);
    text-align: center;
    margin: 1.5rem 0;
  }
  p {
    font-style: italic;
    color: var(--color-grey-dark-1);
  }
  .form-search {
    margin: 1.5rem 0;
    .search {
      width: 100%;
      text-align: center;

      &__input {
        background-color: var(--color-grey-light-3);
        padding: 1rem 2rem;
        border: none;
        border-radius: 100px;
        width: 70%;
        margin-right: -1.25rem;
        font-size: 1.8rem;
        transition: all 0.2s;
        outline: none;
        background-color: var(--color-grey-light-3);

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
  }
  .list-search {
    width: 100%;
    .user {
      margin: 2rem 0;
      border: 1px solid var(--color-grey-dark-1);
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      .wr-left {
        width: 20%;
        button {
          width: 100%;
          padding: 1rem 0rem;
          border-radius: 0.5rem;
          background-color: var(--color-primary);
          color: white;
          border: none;
        }
      }
      .wr-right {
        width: 80%;
        color: var(--color-grey-dark-1);
      }
      .info {
        display: flex;
        span {
          width: 20%;
        }
        strong {
          width: 80%;
        }
      }
    }
  }
  .addnew {
    text-align: center;
  }
  .error {
    text-align: center;

    p {
      color: red;
    }
  }
`;
