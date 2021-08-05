import styled from "styled-components";

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
      object-fit: cover;
    }
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
    p {
      width: 80%;
      color: white;
    }
    .svg {
      fill: var(--color-light);
      width: 5rem;
      height: 5rem;
    }
  }
`;
