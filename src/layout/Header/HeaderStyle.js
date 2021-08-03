import styled from "styled-components";

export const WraperHeader = styled.header`
  height: 9rem;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    &__avt {
      width: 4.75rem;
      border-radius: 50%;
    }
    &__user-name {
      font-size: 1.6rem;
      color: var(--color-light);
      padding-left: 1rem;
    }
  }

  .box-center {
    &__text {
      font-size: 1.8rem;
      color: var(--color-light);
      font-weight: 600;
    }
  }
  .box-right {
    display: flex;
    margin-right: 2rem;
    color: #333;

    &__icon {
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-size: 2.2rem;
      border: 1px solid white;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      text-align: center;
      background-color: white;

      &:not(:last-child) {
        margin-right: 2rem;
      }
      & > * {
        cursor: pointer;
      }
    }
    &__notification {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 1.2rem;
      font-weight: 600;
      color: white;
      background-color: red;
      border-radius: 50%;
      height: 1.6rem;
      width: 1.6rem;
    }
  }
`;
