import styled from "styled-components";

export const WrapAllOrder = styled.div`
  .wrap-search {
    margin-top: 1rem;
    width: 100%;
    .form-group {
      padding: 0.5rem;
      label {
        display: block;
        width: 100%;
        margin: 0.5rem 0;
      }
      input,
      select {
        margin: 0 0.1rem;
        margin-top: 0.1rem;
        outline: none;
        width: 100%;
        padding: 1rem;
        max-width: 50rem;
        width: calc(100% - 2px);
      }
    }
  }
  .list-order {
    margin: 3rem 0rem;
    width: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
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
  }
`;
