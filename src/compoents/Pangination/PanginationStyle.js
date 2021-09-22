import styled from "styled-components";

export const WrapPangination = styled.div`
  :root {
    --blue-color: #3498db;
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  ul {
    list-style-type: none;
    display: flex;
    border-radius: 0.25rem;
    li {
      margin: 0 0.1rem;
      a {
        padding: 0.2rem 1rem;
        line-height: 1.8;
        display: block;
        border-radius: 0.1rem;
        text-decoration: none;
        color: var(--text-color);
        font-size: 1.8rem;
        font-weight: 400;
        transition: all 0.2s;
        &.active,
        :hover {
          background-color: ${(props) => {
            if (props.bgcolor === "red") {
              return " var(--color-primary)";
            } else if (props.bgcolor === "green") {
              return " #00c292";
            } else {
              return " var(--blue-color)";
            }
          }};

          border-color: var(--blue-color);
          color: white;
        }
      }
    }
  }
`;
