import styled from "styled-components";

export const WrapProductInfo = styled.div`
  padding: 1rem 2rem 5rem 2rem;
  .product {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    &__name {
      width: 100%;
      color: var(--color-primary);
    }
    &__img {
      width: 50%;
      margin: 2rem 1rem;
      border: 1px solid var(--color-grey-light-4);
      border-radius: 2rem;
      box-shadow: var(--shadow-dark);

      img {
        width: 100%;
      }
    }
    &__details {
      font-size: 1.8rem;

      ul.info {
        list-style-type: none;
        width: 100%;
        padding: 1rem 0;
        li {
          width: 100%;
          display: flex;
          padding: 1rem 0.5rem;
          &:not(:last-child) {
            border-bottom: 1px solid var(--color-grey-dark-3);
          }

          span {
            width: 35%;
          }
          strong {
            width: 60%;
          }
        }
      }
      .titlecl {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        h3 {
          width: 100%;
          padding: 1rem 0;
        }
        input {
          background-color: var(--color-grey-light-3);
          padding: 1rem 2rem;
          border: none;
          border-radius: 100px;
          width: 70%;
          margin-right: -1.25rem;
          font-size: 1.8rem;
          transition: all 0.2s;
          outline: none;
        }
      }
      .colors {
        display: flex;
        flex-wrap: wrap;
        .color {
          width: 100%;
          padding: 10px;
        }
      }
    }
    &__text {
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 900px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 1200px) {
    margin-bottom: 5rem;
  }
`;

export const WrapColor = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-grey-dark-1);
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: ${(props) => props.textcolor};
  background-color: ${(props) => {
    return props.dataColor ? props.dataColor : "white";
  }};
`;
