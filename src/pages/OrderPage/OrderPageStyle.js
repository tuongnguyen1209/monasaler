import styled from "styled-components";

export const WrapOderPage = styled.div`
  padding: 1rem 2rem;
  .provisinal {
    width: 70%;
    margin: 3rem auto;
    &__header {
      background-color: var(--color-grey-light-3);
      padding: 1rem 1rem;
      text-align: center;
    }
    &__title {
      font-size: 1.8rem;
      text-transform: uppercase;
    }

    span {
      font-size: 1.8rem;
      font-weight: 600;
    }
  }
  .accordion-list {
    margin-top: 1rem;
  }
  table,
  td,
  th {
    border-bottom: 1px solid var(--color-grey-light-4);
  }
  td,
  th {
    padding: 0.5rem 0.5rem;
  }
  td {
    text-align: center;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
`;
