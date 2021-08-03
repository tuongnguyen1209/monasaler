import styled from "styled-components";
export const WraperNav = styled.nav`
  background-color: var(--color-light);
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  height: 10vh;
  .logo-box {
    img {
      height: 6rem;
    }
  }
  .icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    padding: 1rem;
    &__name {
      padding-top: 1rem;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.8rem;
      font-family: inherit;
    }
  }
  .icon {
    color: #ca0b0b;
    font-size: 2.8rem;
  }
  & > * {
    cursor: pointer;
  }

  & > *:hover {
    background-color: #ccc;
  }
`;
