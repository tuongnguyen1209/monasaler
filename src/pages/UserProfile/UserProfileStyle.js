import styled from "styled-components";

export const WrapUserProfile = styled.div`
  /* display: flex; */

  height: 100vh;
  overflow-y: auto;
  padding: 1rem 2rem;
  .wrap-info {
    padding: 1rem;
    width: 100%;
    padding-bottom: 3rem;
    h4 {
      font-size: 1.8rem;
      color: var(--red-color);
      text-align: center;
    }
    .wrap-img {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      img {
        width: 20%;
        border-radius: 50%;
        border: 1px solid var(--grey-color);
      }
      .button-edit {
        background-color: #2980b9;
        color: white;
        padding: 5px;
        border-radius: 50%;
        position: absolute;
        border: 3px solid white;
        bottom: 0;
        left: 53%;
        cursor: pointer;
      }
      .input-file {
        display: none;
      }
    }
    #btn-submit,
    #btn-submit-2 {
      font-size: 1.6rem;
      font-weight: 600;
      padding: 1rem 3rem;
      border: 1px solid var(--color-primary);

      border-radius: 1rem;
      background-color: var(--color-light);
      color: var(--color-primary);

      &:hover,
      :active {
        background-color: var(--color-primary);
        color: var(--color-light);
      }
    }
  }
`;
