import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--primaryDark);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  img {
    opacity: 0;
    object-fit: cover;
  }

  img.active {
    opacity: 1;
  }
`;

export const StatusProgress = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  padding: 12px;

  position: absolute;
  top: 0;
  left: 0;

  > div {
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background-color: #a3a3a3;
    overflow: hidden;
  }

  > div.fill {
    background-color: #fff;
  }

  > div span {
    display: block;
    height: inherit;
    background-color: #fff;
    animation: progress 3s linear forwards;
  }

  > div span.paused {
    animation-play-state: paused;
  }

  > div span.fill {
    background-color: #fff;
  }

  @keyframes progress {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

export const Thumbs = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 2fr;

  position: absolute;
  top: 0;
  left: 0;

  button {
    appearance: none;
    -webkit-appearance: none;
    cursor: auto;
  }

  button:focus {
    border: none;
  }
`;
