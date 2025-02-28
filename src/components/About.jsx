import styled from "styled-components";
import bgImg from "../assets/images/bg-img.png";
import heroImg from "../assets/images/hero-img.png";
import searchIcon from "../assets/images/search-icon.png";
import BarGraph from "./BarGraph";

const About = () => {
  return (
    <Wrapper id="about">
      <div className="img-container">
        <img
          src={bgImg}
          alt="background-img"
          className="bg-img"
        />
      </div>

      <img
        src={searchIcon}
        alt="search-icon"
        className="search-icon"
      />

      <div className="content-wrapper">
        <div>
          <h1>
            About <span>DJFY</span>
          </h1>
          <BarGraph />
          <p>
            Introducing DJFY, the ultimate platform revolutionizing the music
            industry by offering a seamless alternative stream of income for
            DJs, live musicians/bands, and street performers/musicians. With
            DJFY, every artist and venue owner can easily create a free account
            and receive a unique QR code to share with their audience, unlocking
            the power of interactive music experiences like never before. <br />{" "}
            <br />
            With DJFY, artists and venues can tap into a new revenue stream
            while providing an immersive and interactive music experience for
            their audience. Join DJFY today and unlock the potential of your
            performances like never before!
          </p>
        </div>

        <div className="hero-img-container">
          <img
            src={heroImg}
            alt="hero-img"
            className="hero-img"
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 45rem;
  position: relative;
  background: black;
  margin-bottom: 2rem;
  padding-bottom: 14rem;
  min-height: 95vh;

  .img-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
    overflow: hidden;

    .bg-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .search-icon {
    position: absolute;
    width: 76px;
    height: 76px;
    right: 6%;
    top: 10%;
    cursor: pointer;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: 1300px;
    position: relative;
    top: 25%;
    padding: 2rem;

    h1 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 42px;
      margin-bottom: 10px;

      span {
        color: #ec3533;
      }
    }

    p {
      /* width: 400px; */
      max-width: 560px;
      font-weight: 500;
      font-size: 1rem;
    }

    .hero-img-container {
      /* border: 4px solid white; */
      display: none;
      position: relative;
      height: 400px;

      .hero-img {
        position: relative;
        z-index: 2;
      }
    }

    @media screen and (min-width: 900px) {
      flex-direction: row;

      .hero-img-container {
        display: block;
      }
    }

    @media screen and (min-width: 1200px) {
      .hero-img-container {
        width: 400px;
      }

      .hero-img-container::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 95%;
        background-image: url("./layover-img.png");
        background-size: cover;
        border-radius: 15px;
        top: 20%;
        left: 35%;
        z-index: 1;
        opacity: 0.8;
      }
    }
  }
`;

export default About;
