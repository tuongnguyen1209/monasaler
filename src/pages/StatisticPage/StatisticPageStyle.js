import styled from "styled-components";

export const WrapStatistic = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 5rem;
  .tabst {
    width: 100%;
  }
  .form-date {
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
  h4 {
    width: 100%;
    text-align: center;
    margin: 1.5rem 0;
  }
  .statistic-to-month {
    margin: 1.8rem auto;
    width: 300px;
    .wrapchart {
      width: 100%;
      overflow-x: auto;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .my-statistic {
    width: 100%;
    max-width: 560px;
    margin: auto;
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      width: 100%;
      margin: 1rem 0;
      padding: 1rem;
      border: 1px solid;
      border-radius: 0.5rem;
      background-color: var(--color-primary-2);
      color: white;
      align-items: center;
      span {
        width: 40%;

        text-align: left;
      }
      strong {
        text-align: center;
        width: 60%;
        padding-left: 3rem;
      }
    }
  }
`;
