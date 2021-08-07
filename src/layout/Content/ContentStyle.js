import styled from "styled-components";
export const WraperContent = styled.div`
  background-color: var(--color-light);
  /* border-top-left-radius: 5rem;
  border-top-right-radius: 5rem; */
  padding: 1rem 1rem;
  margin: 0.3rem auto;
  height: 100%;

  /* box-shadow: var(--shadow-dark); */

  .scan {
    color: var(--color-light);

    display: flex;
    margin: 5rem 2rem;
    flex-direction: column;
    align-items: center;
    padding: 1rem 3rem;
    border-radius: 2rem;
    background-image: linear-gradient(
      to right,
      var(--color-primary-2),
      var(--color-primary)
    );
    background-size: cover;
    &__img {
      fill: var(--color-light);
      width: 10rem;
      height: 10rem;
    }
    &__text {
      text-transform: uppercase;
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  .manual {
    padding: 2rem 0;
    &__header {
      width: 100%;
      background-color: var(--color-grey-light-3);
      padding: 1rem 1rem;
      text-align: center;
    }
    &__content {
      padding: 1rem 1rem;
    }
    &__title {
      color: red;
      font-weight: 600;
    }
    &__text {
    }
    span[data-color="red"] {
      color: red;
      font-weight: 600;
    }

    span[data-color="nor"] {
      color: inherit;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 5rem;
  }

  @media (min-width: 1200px) {
    margin-bottom: 5rem;
  }
`;
