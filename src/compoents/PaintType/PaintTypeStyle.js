import styled from "styled-components";

export const WraperProductList = styled.div`
  .body__link {
    text-decoration: none;
  }

  .body__item {
    margin: 1rem 0;
    padding: 1rem 1rem;
    border-radius: 1rem;
    text-align: center;
    cursor: pointer;
    box-shadow: var(--shadow-light);
    background-image: linear-gradient(
      to right,
      var(--color-primary-2),
      var(--color-primary)
    );

    font-size: 2rem;
    text-transform: uppercase;
    color: var(--color-light);
    font-weight: 600;
  }
`;
