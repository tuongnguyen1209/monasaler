import styled from "styled-components";

export const WapperForm = styled.form`
  .d-flex {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .w-50 {
    width: 50%;
  }
  .w-20 {
    width: 20%;
  }
  .w-25 {
    width: 25%;
  }
  .text-center {
    text-align: center;
  }
  .form-group {
    color: var(--text-color);
    padding: 0.3rem 1rem;
    label {
      width: 100%;
      display: block;
      padding: 0.5rem 0.5rem;
    }
    input[type="text"],
    input[type="email"],
    input[type="number"],
    input[type="password"],
    select {
      width: 70%;
      padding: 1rem 1rem;
      border: 1px solid #ddd;
      border-radius: 0.5rem;
      transition: all 0.2s ease;
      :active,
      :focus {
        border: 1px solid var(--text-color);
      }

      :disabled {
        background-color: lightgray;
      }
    }
    label,
    input,
    select {
      font-size: 1.6rem;
      font-weight: 500;
      outline: none;
      &.form-control {
        width: 100%;
        padding: 1rem 1rem;
        border: 1px solid #ddd;
        border-radius: 0.5rem;
        transition: all 0.2s ease;
        :active,
        :focus {
          border: 1px solid var(--text-color);
        }
      }
    }
    input[type="submit"] {
      padding: 1rem 1.5rem;
      border: 1px solid var(--red-color);
      color: var(--red-color);
      border-radius: 3px;
      background-color: white;
      box-shadow: 1px 1px 3px lightgray;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      :hover {
        background-color: var(--red-color);
        color: white;
      }
    }
  }
  .form-inline {
    color: var(--text-color);
    padding: 0.3rem 1rem;

    label,
    input {
      font-size: 1.6rem;
      font-weight: 500;
      outline: none;
    }
    label {
      padding: 1rem;
    }
  }
`;
