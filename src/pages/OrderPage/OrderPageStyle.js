import styled from "styled-components";

export const WrapOderPage = styled.div`
  padding: 1rem 2rem;
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
  }
  td {
    text-align: center;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
`;
export const ListItemCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    .wrapimg {
      width: 20%;
      height: 100%;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .info {
      width: 35%;
      h4 {
        color: red;
        padding: 1rem 0;
      }
      .mau {
        display: flex;
        justify-content: space-around;
        .preview {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
      }
    }
    .tinhtoan {
      width: 35%;
    }
    .action {
      width: 10%;
    }
  }
`;
