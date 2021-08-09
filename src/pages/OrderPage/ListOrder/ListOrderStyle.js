import styled from "styled-components";
export const WrapListOrder = styled.div`
  margin-top: 1rem;

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
`;
