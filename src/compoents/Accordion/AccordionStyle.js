import styled from "styled-components";

export const WrapAccordion = styled.div`
  padding-bottom: 0.5rem;
  .provisinal {
    &__list:not(:last-child) {
      border-bottom: 1px solid var(--color-grey-light-4);
    }
    &__icon {
      position: absolute;
      right: 1rem;
      transition: transform 0.2s;
      &.icon-show {
        transform: rotate(-180deg);
      }
    }
    &__date {
      /* background-color: var(--color-grey-light-2); */
      position: relative;
      display: flex;
      padding: 1rem;
      border: 1px solid var(--color-grey-light-4);
      span {
        font-weight: 600;
      }
    }
    &__order {
      /* padding: 1rem 1rem; */
      border: 1px solid var(--color-grey-light-4);

      opacity: 0;
      display: none;
      overflow-x: auto;
      ::-webkit-scrollbar {
        display: none;
      }

      &.order-show {
        opacity: 1;
        display: block;
      }
    }
  }
`;
