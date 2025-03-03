import styled from "styled-components";
import comment from "../../assets/images/comment.png";
import Title from "../Title";
import { useState } from "react";
import testimonialsList from "./testimonialsList";
import quote from "../../assets/images/quote.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(
    Array(15)
      .fill()
      .map((_, i) => testimonialsList[i % testimonialsList.length])
  );
  // console.log(testimonials);

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Wrapper id="testimonials">
      <Title
        icon={comment}
        title="client"
        subtitle="testimonials"
      />

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>

      <SliderWrapper className="center slider-container">
        <div className="image-container">
          <Slider {...settings}>
            {testimonials.map(({ text, name, job, image }, index) => {
              return (
                <div
                  key={index}
                  className="testimony"
                >
                  <img
                    src={image}
                    alt="testimonial-img"
                  />
                  <div className="overlay"></div>

                  <div className="content">
                    <img
                      src={quote}
                      alt="quote"
                      className="quote"
                    />
                    <p>{text}</p>
                    <p className="name">{name}</p>
                    <span>{job}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </SliderWrapper>

      {/* <div className="scroll-btn">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #09173c;
  text-align: center;
  padding: 4rem;

  p {
    text-align: center;
    font-weight: 300;
    font-size: 1rem;
    opacity: 0.8;
    max-width: 790px;
    margin: 0 auto;
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

  .center {
    display: flex;
    justify-content: center;
    width: 80vw;
    max-width: 1400px;
    margin: 0 auto;
    gap: 1rem;

    .image-container {
      width: 100%;
      height: 100%;
      margin-top: 2rem;
      /* display: grid;
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      gap: 1.5rem;
      justify-content: center;
      align-items: center; */

      .testimony {
        width: 100%;
        height: 100%;
        /* border: 2px solid red; */
        border-radius: 16px;
        position: relative;
        margin-right: 2rem;

        img {
          border-radius: 16px;

          width: 100%;
          height: 100%;
        }

        .overlay {
          background: #000000a8;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 16px;
        }

        .content {
          position: absolute;
          /* display: none; */
          width: 100%;
          /* border: 2px solid red; */
          bottom: 10%;
          padding: 1rem;

          .quote {
            width: 2rem;
            height: 29px;
            font-weight: 500;
            margin-bottom: 10px;
          }

          p {
            font-weight: 400;
            font-size: 14px;
            text-align: center;
            line-height: 20px;
          }

          .name {
            font-weight: 700;
            font-size: 16px;
            margin-top: 10px;
          }

          span {
            color: #fddf09;
            font-size: 10px;
            font-weight: 500;
          }
        }
      }
    }
  }

  .slider-container {
    width: 80%;
    margin: auto;
    text-align: center;
    margin-bottom: 8rem;
  }

  .slick-slide {
    padding: 0 10px; /* Add padding around each slide to create gaps */
  }

  .slick-list {
    margin: 10px; /* Adjust margin to account for the padding on slides */
  }
/* 
  .slick-active {
    .overlay {
      background: #db1e2d80;
    }
  } */

  .slider-container img {
    /* border: 2px solid white; */
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
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

export default Testimonials;
