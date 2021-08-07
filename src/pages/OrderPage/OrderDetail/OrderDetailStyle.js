import styled from "styled-components";

export const WrapOrderDetail = styled.div`
  padding: 1rem 2rem;

  .detail-order {
    padding-top: 3rem;
    .product {
      background-color: var(--color-grey-light-2);
      &__box2 {
        display: flex;
        &:not(:last-child) {
          border-bottom: 2px solid var(--color-grey-light-4);
        }
        &:not(:first-child) {
          margin-top: 1rem;
        }
      }
      &__img {
        width: 9rem;
        img {
          width: 100%;
        }
      }
      &__inner {
        margin: 0 0 1rem 1.5rem;
      }
      &__name {
        font-weight: 550;
      }
      &__manu {
        font-weight: 500;
        font-size: 1.2rem;
        margin: 1rem 0 0;
      }
      &__total {
        font-weight: 550;
        margin: 1rem 0 0;
      }
    }
    &__box {
      display: flex;
      padding: 1rem 1rem;
      margin-bottom: 0.8rem;
      background-color: var(--color-grey-light-2);
    }
    &__icon {
      color: var(--color-primary);
      font-size: 2.5rem;
      width: 5%;
    }
    &__inner {
      margin: 0 0 0 1.5rem;
    }
    &__title {
      margin: 3px 0px 0px;
      font-size: 1.7rem;
      font-weight: 600;
    }
    &__date {
      margin: 1rem 0;
      font-weight: 500;
    }
    &__status {
      font-weight: 500;
    }
    &__fullname {
      font-weight: 550;
      margin: 1rem 0 0;
    }
    &__info {
      margin: 1rem 0;
      font-weight: 500;
      &:last-child {
        margin: 0;
      }
    }
    .price-summary {
      margin-top: 0.8rem;
      background-color: var(--color-grey-light-2);

      .summary {
        padding: 1rem;
        &__inner {
          padding: 1rem;
          &:not(:last-child) {
            border-bottom: 1px solid var(--color-grey-light-4);
          }
          display: flex;
          justify-content: space-between;
        }
        &__text {
        }
        &__value {
        }
        &__total {
          font-weight: 600;
          font-size: 1.8rem;
        }
      }
    }
  }
  .btn-box {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-bottom: 8rem;
  }

  @media (min-width: 1200px) {
    margin-bottom: 7rem;
  }
`;
