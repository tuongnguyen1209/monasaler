import styled from "styled-components";

export const WrapForm = styled.div`
  padding: 1rem 1rem;
  width: 100%;

  text-align: center;
  background-color: var(--color-light);
  .form__header {
    position: relative;
    &-title {
      color: var(--color-primary);
      font-size: 2rem;
      font-weight: 600;
    }
    .close {
      cursor: pointer;
      position: absolute;
      display: block;
      padding: 2px 5px;
      line-height: 20px;
      right: -10px;
      top: -10px;
      font-size: 24px;
      background: #ffffff;
      border-radius: 18px;
      border: 1px solid #cfcece;
    }
  }
  .form__content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .form__input {
    padding: 1rem 1rem;
    margin: 0.5rem;
    outline: none;
    border: 1px solid var(--color-grey-light-4);
    border-radius: 1rem;
  }
`;
