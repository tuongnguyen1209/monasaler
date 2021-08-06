import styled from "styled-components";

export const WrapButton = styled.button`
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border: 1px solid var(--color-primary);
  border-radius: 1rem;
  background-color: var(--color-light);
  color: var(--color-primary);
  &:hover,
  :active {
    background-color: var(--color-primary);
    color: var(--color-light);
  }
`;
