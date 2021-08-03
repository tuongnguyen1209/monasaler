import styled from "styled-components";
export const WraperContent = styled.div`
  background-color: var(--color-light);
  height: 83rem;
  border-top-left-radius: 5rem;
  border-top-right-radius: 5rem;
  margin: 0.3rem auto;
  display: flex;
  justify-content: center;
  .search {
    padding-top: 1rem;
    width: 50%;

    &__input {
      background-color: #f4f2f2;
      padding: 0.9rem 2rem;
      border: none;
      border-radius: 100px;
      width: 90%;
      margin-right: -3.25rem;
      font-size: 1.8rem;

      &:focus {
        outline: none;
        width: 100%;
        background-color: #f0eeee;
      }

      &::-webkit-input-placeholder {
        font-weight: 100;
        color: #ccc;
      }
    }

    &__button {
      border: none;
      background-color: #f4f2f2;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    &__icon {
      color: #ccc;
      font-size: 1.8rem;
    }
  }
`;
