import styled from "styled-components";

export const Wrapersub = styled.div`
  .sub-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__icon {
      font-size: 1.8rem;
    }

    &__box {
      flex: 0 0 30%;
      margin-right: -2rem;
      border-bottom-left-radius: 1rem;
      background-image: linear-gradient(
        to right,
        var(--color-primary-2),
        var(--color-primary)
      );
    }

    &__name {
      padding: 0.5rem 2rem;
      color: var(--color-light);
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 500;
      font-family: "Open Sans";
    }
  }
`;
