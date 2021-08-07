import styled from "styled-components";

export const ListItemCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-grey-light-4);
    .wrapimg {
      width: 20%;
      height: 100%;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .info {
      width: 75%;
      padding: 1rem;
      h4 {
        color: red;
        padding: 1rem 0;
        width: 100%;
      }
      .calcu {
        display: flex;
        justify-content: center;
        align-items: center;
        .tinhtoan {
          width: 50%;

          input {
            width: 3rem;
            outline: none;
            text-align: center;
            padding: 0.5rem 0.7rem;
            border: 1px solid var(--color-grey-dark-3);
          }
          button {
            padding: 0.5rem 0.7rem;
            margin: 0 0.2rem;
            width: 2.5rem;
            background-color: transparent;
            border: 1px solid var(--color-grey-dark-3);
          }
        }
        .mau {
          width: 50%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .preview {
            border: 1px solid var(--color-grey-dark-3);

            width: 2rem;
            height: 2rem;
            border-radius: 50%;
          }
        }
      }
    }

    .action {
      width: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        border: none;
        color: var(--color-primary);
        font-size: 2rem;
      }
    }
  }
`;
