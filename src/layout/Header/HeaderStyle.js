import styled from "styled-components";

export const WraperHeader = styled.header`
  background-color: var(--color-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
  box-shadow: var(--shadow-dark);
  .user {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    padding: 0.5rem;
    border-radius: 2rem;
    &__avt {
      width: 4.75rem;
      border: 1px solid var(--color-grey-dark-3);
      border-radius: 50%;
    }
    &__user-name {
      font-size: 1.6rem;
      color: var(--color-grey-dark-1);
      font-weight: 600;
      padding-left: 1rem;
    }
    &:hover {
      background-color: var(--color-grey-light-3);
    }
  }

  .box-center {
    &__text {
      font-size: 1.8rem;
      color: var(--color-grey-dark-1);
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
      background-color: var(--color-grey-light-3);

      &:not(:last-child) {
        margin-right: 2rem;
      }

      & {
        cursor: pointer;
      }

      &:hover {
        background-color: var(--color-grey-light-4);
      }
    }
    &__icon2:active {
      color: #1876f2;
    }
    &__notification {
      position: absolute;
      height: 1.8rem;
      width: 1.8rem;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 1.2rem;
      font-weight: 600;
      color: white;
      background-color: red;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
