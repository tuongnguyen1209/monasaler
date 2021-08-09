import styled, { keyframes } from "styled-components";

const slideAnimate = keyframes`
  from {
    top:10%;
  }
  to{
    top:85%
  }
`;

export const WrapCamera = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .wrapVideo {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;

    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    p {
      width: 80%;
      color: white;
      margin: 2rem 0;
    }
    .image {
      position: relative;
      .line {
        width: 85%;
        height: 0.5rem;
        background-color: red;
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translateX(-50%);
        animation: ${slideAnimate} 3s infinite alternate;
      }
      .svg {
        fill: var(--color-light);
        height: 60vw;
        width: 60vw;
      }
    }
    a {
      text-decoration: none;
      margin: 2rem 0;
      .btn {
        font-size: 2.5rem;
        padding: 1rem 2rem;
        background-color: red;
        border: none;
        color: white;
        border-radius: 0.5rem;
      }
    }
  }
`;
