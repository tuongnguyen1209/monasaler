import styled from "styled-components";

export const WrapAddCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  h3 {
    width: 100%;
    text-align: center;
    margin: 1.5rem 0;
  }
  .wrapimg {
    width: 30%;
    max-width: 20rem;
    margin: auto;
    img {
      width: 100%;
    }
  }
  .wrapInfo {
    width: 100%;
    h4 {
      text-align: center;
      padding: 1rem 0;
    }
    .color {
      display: flex;
      align-items: center;
      padding: 2rem 0;
      justify-content: center;
      .clpreview {
        width: 3rem;
        height: 3rem;
        border: 1px solid;
        border-radius: 50%;
      }
      .namecl {
        width: 60%;
        text-align: center;
      }
    }
    .inputform {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      input {
        width: 5rem;
        padding: 1rem;
        outline: none;
        border: 1px solid lightgray;
        text-align: center;
      }
      button {
        padding: 1rem 2rem;
        background-color: var(--color-primary);
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 0.5rem;
      }
    }
    .ifo {
      display: flex;
      margin: 1rem 0;
      justify-content: center;
      span {
        width: 40%;
      }
      strong {
      }
    }
  }
  .wrapAction {
    margin: 1.5rem 0;
    width: 100%;
    text-align: center;
  }
`;
