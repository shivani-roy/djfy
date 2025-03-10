import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bgImg from "../../assets/images/bg-img.png";
import searchbg from "../../assets/images/search-bg.png";
import searchbar from "../../assets/images/search-bar.png";
import { useState } from "react";
import eventsList from "./eventsList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Events = () => {
  const [events, setEvents] = useState(
    Array(15)
      .fill()
      .map((_, i) => eventsList[i % eventsList.length])
  );

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Wrapper id="events">
      <div className="img-container">
        <img
          src={bgImg}
          alt="bg-img"
          className="bg-img"
        />
      </div>

      <div className="search-container">
        <div className="search-bg">
          <img
            src={searchbg}
            alt="search-bg"
            className="search-bg-img"
          />
        </div>

        <div className="search-content">
          <h1>The Ultimate DJ Tool</h1>
          <img
            src={searchbar}
            alt="search-bar"
            className="search-bar-img"
          />
        </div>
      </div>

      <div className="events-container">
        {/* <FaArrowLeft /> */}
        <Slider {...settings}>
          {events.map(({ image, date, place, artist }, index) => {
            return (
              <div
                key={index}
                className="event"
              >
                <img
                  src={image}
                  alt="artist-img"
                  className="img"
                />
                <div className="fade-effect"></div>

                <div className="content">
                  <span className="date">{date}</span>
                  <h5>{artist}</h5>
                  <span className="place">{place}</span>
                </div>
              </div>
            );
          })}
        </Slider>
        {/* <FaArrowRight /> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #0a0d2cdb;
  /* overflow: hidden; */
  height: 700px;
  position: relative;
  display: flex;
  justify-content: center;

  svg {
    cursor: pointer;
    font-size: 1.5rem;
  }

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

  .search-container {
    position: relative;
    display: flex;
    align-items: center;

    .search-bg {
      max-width: 1700px;
      position: absolute;
      z-index: 1;
      margin: 2rem;

      .search-bg-img {
        display: none;
      }

      @media screen and (min-width: 850px) {
        .search-bg-img {
          width: 100%;
          display: block;
          margin: 0 auto;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .search-content {
      margin-top: -4rem;
      padding: 4rem;
      position: relative;
      z-index: 2;
      top: 2rem;

      h1 {
        text-align: center;
        font-size: 55px;
        font-weight: 500;
        margin-bottom: 1rem;
        text-transform: uppercase;
      }

      .search-bar-img {
        width: 100%;
        height: auto;
        cursor: pointer;
      }
    }
  }

  .events-container {
    position: absolute;
    bottom: -150px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    width: 100%;
    height: 20rem;
    gap: 3rem;
    padding: 2rem;
    margin: 0 auto;

    .event {
      position: relative;
      width: 20rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 16px;
      overflow: hidden;

      .img {
        width: 100%;
        /* max-width: 20rem; */
        height: auto;
        max-height: 25rem;
        display: block;
      }

      .fade-effect {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 150px;
        right: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
        z-index: 1;
      }

      .content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        /* background: rgba(0, 0, 0, 0.6); Dark overlay */
        padding: 1rem;
        z-index: 2;

        .date {
          color: #fddf09;
          font-size: 1rem;
          font-weight: 500;
        }

        h5 {
          color: #cf1327;
          font-size: 18px;
          font-size: 600;
        }

        .place {
          font-weight: 300;
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .events-container {
      display: none;
    }
  }

  .slider-container {
    width: 80%;
    height: 10rem;
    max-height: 10rem;
    margin: auto;
    text-align: center;
    margin-bottom: 8rem;
  }

  .slick-slide {
    padding: 0 80px; /* Add padding around each slide to create gaps */
  }

  .slick-list {
    margin: 10px; /* Adjust margin to account for the padding on slides */
  }

  .slider-container img {
    /* border: 2px solid white; */
    width: 100%;
    /* height: auto; */
    max-height: 5rem;
    display: block;
    margin: 0 auto;
  }
`;

export default Events;
