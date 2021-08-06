import styled from "styled-components";

export const WrapperTabs = styled.header`
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;
  border-bottom: 1px solid #e8e8e8;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    margin: 0 1rem;
    padding: 1rem;
    position: relative;
    white-space: nowrap;
    transition: all 0.2s;
    :hover {
      color: var(--color-primary);
    }
    &.active {
      color: var(--color-primary);

      :after {
        content: "";
        background-color: var(--color-primary);
        height: 0.2rem;
        width: 100%;
        left: 0;
        display: block;
        position: absolute;
        top: 0;
      }
    }
  }
`;
