import styled from "styled-components";

export const WrapOderPage = styled.div`
  padding: 1rem 2rem;
  .note-text {
    color: var(--color-primary);
    padding: 1rem;
  }
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
    white-space: nowrap;
  }
  td > a {
    color: var(--color-primary);
  }
  td {
    text-align: center;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  .orderinfo {
    width: 100%;
    list-style-type: none;
    .line {
      width: 100%;
      height: 1px;
      background-color: var(--color-grey-light-4);
    }
    li {
      display: flex;
      padding: 1rem 0.5rem;
      span {
        width: 40%;
        text-align: left;
      }
      strong {
        text-align: left;
        width: 60%;
        &.price {
          text-align: right;
        }
      }
    }
  }
`;
