import styled from "styled-components";
export const WraperNav = styled.nav`
  background-color: var(--color-light);
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: var(--shadow-dark);
  position: fixed;
  bottom: 0;
  width: 100%;
  a:link,
  a:active {
    text-decoration: none;
    color: var(--color-light);
  }

  .icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    justify-content: center;
    padding: 1rem;
    position: relative;
    &__name {
      padding-top: 1rem;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.8rem;
      font-family: inherit;
      color: var(--color-grey-dark-1);
    }
    &.active::after {
      content: "";
      background-color: var(--color-primary);
      width: 100%;
      height: 3px;
      position: absolute;
      bottom: 0;
    }
  }
  .icon {
    color: #ca0b0b;
    font-size: 2rem;
  }
  & > * {
    cursor: pointer;
  }

  & > *:hover {
    background-color: var(--color-grey-light-4);
  }
  @media screen and (min-width: 1025px) {
    max-width: 90rem;
  }
  @media screen and (max-width: 766px) {
    .logo-box {
      img {
        height: 6rem;
        &.logomini {
          display: block;
        }
        &.logo {
          display: none;
        }
      }
    }
    .icon-box {
      &__name {
        font-size: 0.8rem;
      }
    }
  }
`;
