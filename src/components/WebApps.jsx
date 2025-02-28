import styled from "styled-components";
import webApp from "../assets/images/webapp.png";
import apps from "../assets/images/apps.png";
import Title from "./Title";

const WebApps = () => {
  return (
    <Wrapper id="web-apps">
      <Title
        icon={webApp}
        title="Web"
        subtitle="Apps"
      />
      <p>
        Scan the QR Code, Connect to the event and request your song . No need
        to Download or install any App.
      </p>

      <div className="img-container">
        <img
          src={apps}
          alt="apps-img"
        />
        <div className="layover-right"></div>
        <div className="layover-left"></div>
      </div>

      <div className="scroll-btn">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="btn-container">
        <button>Sign Up as User</button>
        <button>Sign Up as DJ</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 6rem;
  padding: 2rem;
  padding-bottom: 4rem;
  @media screen and (min-width: 900px) {
    margin-top: 12rem;
  }

  p {
    text-align: center;
    font-weight: 300;
    font-size: 1rem;
    opacity: 0.8;
  }

  .img-container {
    max-width: 1400px;
    margin: 0 auto;
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-wrap: wrap;

    .layover-right,
    .layover-left {
      width: 320px;
      height: 736px;
      position: absolute;
      background: #07091fb5;
      /* border: 2px solid white; */
    }

    .layover-left {
      left: 200px;
    }

    .layover-right {
      right: 200px;
    }

    img {
      width: 70%;
    }

    @media screen and (max-width: 1400px) {
      .layover-left,
      .layover-right {
        display: none;
      }
    }
  }

  .scroll-btn {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 4rem;

    div {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
      opacity: 0.5;
    }

    div:nth-child(3) {
      background: #fddf09;
      opacity: 1;
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;
    gap: 2rem;

    button {
      background: linear-gradient(#f6b910, #d71b2c);
      color: white;
      width: 195px;
      height: 50px;
      border: transparent;
      border-radius: 6px;
      font-weight: 500;
      font-size: 1rem;
      display: inline-block;
      margin-top: 3rem;
      cursor: pointer;
    }
  }
`;
export default WebApps;
