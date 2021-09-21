import styled from "styled-components";
import bg from "../../assets/img/bg-login.jpg";

export const WraperLogin = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0;
  background: url(${bg});
  background-size: auto 100%;
  img.bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .wrap-logo {
    width: 100%;
    text-align: center;
    .logo {
      width: 40%;
    }
  }
  .wrap {
    background-color: rgba(0, 0, 0, 0.65);
    color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    width: 70%;
    h1 {
      font-size: 2em;
      text-align: center;
      padding: 2rem 0;
    }

    form {
      padding: 2rem 0;
      .form-group {
        width: 100%;
        padding: 1rem;
        label {
          width: 100%;
          display: block;
        }
        input.form-control {
          width: 100%;
          padding: 1rem;
          background-color: transparent;
          outline: none;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 1.8rem;
          ::placeholder {
            color: white;
            opacity: 0.6;
          }
        }
        input.btn {
          margin: auto;
          width: 80%;
          outline: none;
          color: var(--white-color);
          background-color: #ffb463;
          display: block;
          padding: 1rem 1rem;
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
        }
        a.qmk {
          text-align: center;
          display: block;
          padding: 1rem 0;
        }
        .group {
          display: flex;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          input.form-control {
            border-bottom: none;
          }
          .icon {
            min-width: 3rem;
          }
        }
      }
    }
  }
`;
