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
      padding-bottom: 1rem;
    }
    .close {
      cursor: pointer;
      position: absolute;
      display: block;
      padding: 2px 5px;
      line-height: 20px;
      right: -10px;
      top: -10px;
      font-size: 2.4rem;
      font-weight: 600;
      background: #ffffff;
      border-radius: 2rem;
      border: 1px solid var(--color-grey-dark-2);
    }
  }
  .form__content {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    width: 100%;
  }
  .form__input {
    padding: 1rem 1rem;
    margin: 0.5rem;
    outline: none;
    border: 1px solid var(--color-grey-light-4);
    border-radius: 1rem;
    font-size: 1.8rem;

    ::-webkit-input-placeholder {
      font-size: 1.6rem;
    }
  }
  .btn-box {
    width: 100%;
  }
`;
