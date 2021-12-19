import styled from "styled-components";
export const LoadMore = styled.button`
  flex-basis: 100%;

  border: none;
  font-weight: bold;
  margin: 20px 0;
  width: 300px;
  height: 200px;
  /* background: linear-gradient(90deg, transparent 100%, rgba(49, 165, 157, 0.5) 0); */
  background: rgba(49, 165, 157, 0.1);

  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: white;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  align-self: center;
  margin: 30px 0;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: var(--color-logo-alt);
    opacity: 0;
    -webkit-transition: 0.2s opacity ease-in-out;
    transition: 0.2s opacity ease-in-out;
  }

  &:hover::before {
    opacity: 0.2;
  }
  span {
    position: absolute;
  }
  span:nth-child(1) {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      from(rgba(8, 20, 43, 0)),
      to(var(--color-logo-alt))
    );
    background: linear-gradient(
      to left,
      rgba(8, 20, 43, 0),
      var(--color-logo-alt)
    );
    -webkit-animation: 2s animateTop linear infinite;
    animation: 2s animateTop linear infinite;
  }

  @-webkit-keyframes animateTop {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  @keyframes animateTop {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  span:nth-child(2) {
    top: 0px;
    right: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(rgba(8, 20, 43, 0)),
      to(var(--color-logo-alt))
    );
    background: linear-gradient(
      to top,
      rgba(8, 20, 43, 0),
      var(--color-logo-alt)
    );
    -webkit-animation: 2s animateRight linear -1s infinite;
    animation: 2s animateRight linear -1s infinite;
  }

  @-webkit-keyframes animateRight {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
    100% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @keyframes animateRight {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
    100% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  span:nth-child(3) {
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(8, 20, 43, 0)),
      to(var(--color-logo-alt))
    );
    background: linear-gradient(
      to right,
      rgba(8, 20, 43, 0),
      var(--color-logo-alt)
    );
    -webkit-animation: 2s animateBottom linear infinite;
    animation: 2s animateBottom linear infinite;
  }

  @-webkit-keyframes animateBottom {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    100% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  @keyframes animateBottom {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    100% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  span:nth-child(4) {
    top: 0px;
    left: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(8, 20, 43, 0)),
      to(var(--color-logo-alt))
    );
    background: linear-gradient(
      to bottom,
      rgba(8, 20, 43, 0),
      var(--color-logo-alt)
    );
    -webkit-animation: 2s animateLeft linear -1s infinite;
    animation: 2s animateLeft linear -1s infinite;
  }

  @-webkit-keyframes animateLeft {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
    100% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }

  @keyframes animateLeft {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
    100% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }
`;
