import styled from "styled-components";

export const WrapAccordion = styled.div`
  .provisinal {
    &__list:not(:last-child) {
      border-bottom: 1px solid var(--color-grey-light-4);
    }
    &__icon {
      transition: transform 0.2s;
      &.icon-show {
        transform: rotate(-180deg);
      }
    }
    &__date {
      display: flex;
      justify-content: space-between;
      padding-top: 1rem;
    }
    &__order {
      padding: 1rem 1rem;
      opacity: 0;
      display: none;

      &.order-show {
        opacity: 1;
        display: block;
      }
    }
  }
`;
