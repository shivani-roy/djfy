import styled from "styled-components";
import webApp from "../assets/images/webapp.png";
import apps from "../assets/images/apps.png";
import Title from "./Title";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WebApps = () => {
  const [webApps, setWebApps] = useState(Array(5).fill(apps));
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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

      <SliderWrapper className="slider-container">
        <Slider {...settings}>
          {webApps.map((image, index) => {
            return (
              <div
                key={index}
                className="img-container"
              >
                <img
                  src={image}
                  alt="apps-img"
                />
                <div className="layover-right"></div>
                <div className="layover-left"></div>
              </div>
            );
          })}
        </Slider>
      </SliderWrapper>

      {/* <div className="scroll-btn">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}

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
  padding-top: 8rem;
  padding-bottom: 4rem;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */

  @media screen and (min-width: 900px) {
    margin-top: 12rem;
  }

  p {
    text-align: center;
    font-weight: 300;
    font-size: 1rem;
    opacity: 0.8;
  }

  .slider-container {
    width: 80%;
    margin: auto;
    text-align: center;
  }

  .slider-container img {
    /* border: 2px solid white; */
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    margin-bottom: 4rem;
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

const SliderWrapper = styled.div`
  .slick-dots {
    list-style: none;
    display: flex !important;
    justify-content: center;
    margin: 20px 0 0;
    padding: 0;
    /* border: 2px solid white; */
  }

  .slick-dots li {
    display: inline-block;
    margin: 0 1px;
  }

  .slick-dots li button:before {
    font-size: 8px;
    color: #fff; /* Default dot color */
    opacity: 0.5; /* Default opacity */
  }

  .slick-dots li.slick-active button:before {
    color: #fddf09; /* Active dot color */
    opacity: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 1.75rem;
    color: #fff; /* Default arrow color */
  }
`;
export default WebApps;
