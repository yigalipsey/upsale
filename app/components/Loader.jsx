import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    --size: 500px;
    --duration: 4s;
    --logo-color: white;
    --background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    height: var(--size);
    aspect-ratio: 1;
    position: absolute;
    bottom: -250px;
    left: -250px;
    z-index: 1;

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
      --size: 300px;
      height: var(--size);
      bottom: -150px;
      --background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.05) 0%,
        rgba(255, 255, 255, 0.02) 100%
      );
    }
  }

  .loader .box {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    background: var(--background);
    border-radius: 50%;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: rgba(255, 255, 255, 0.1) 0px 10px 10px -0px;
    backdrop-filter: blur(5px);
    animation: ripple var(--duration) infinite ease-in-out;

    @media (max-width: 768px) {
      background: rgba(255, 255, 255, 0.05);
      border-top-color: rgba(255, 255, 255, 0.2);
      box-shadow: rgba(255, 255, 255, 0.05) 0px 10px 10px -0px;
    }
  }

  .loader .box:nth-child(1) {
    inset: 40%;
    z-index: 99;
  }

  .loader .box:nth-child(2) {
    inset: 30%;
    z-index: 98;
    border-color: rgba(255, 255, 255, 0.4);
    animation-delay: 0.8s;

    @media (max-width: 768px) {
      border-color: rgba(255, 255, 255, 0.2);
    }
  }

  .loader .box:nth-child(3) {
    inset: 20%;
    z-index: 97;
    border-color: rgba(255, 255, 255, 0.3);
    animation-delay: 1.6s;

    @media (max-width: 768px) {
      border-color: rgba(255, 255, 255, 0.15);
    }
  }

  .loader .box:nth-child(4) {
    inset: 10%;
    z-index: 96;
    border-color: rgba(255, 255, 255, 0.2);
    animation-delay: 2.4s;

    @media (max-width: 768px) {
      border-color: rgba(255, 255, 255, 0.1);
    }
  }

  .loader .box:nth-child(5) {
    inset: 0%;
    z-index: 95;
    border-color: rgba(255, 255, 255, 0.1);
    animation-delay: 3.2s;

    @media (max-width: 768px) {
      border-color: rgba(255, 255, 255, 0.05);
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      box-shadow: rgba(255, 255, 255, 0.1) 0px 10px 10px -0px;
    }
    50% {
      transform: scale(1.3);
      box-shadow: rgba(255, 255, 255, 0.2) 0px 30px 20px -0px;
    }
    100% {
      transform: scale(1);
      box-shadow: rgba(255, 255, 255, 0.1) 0px 10px 10px -0px;
    }
  }
`;

export default Loader;
