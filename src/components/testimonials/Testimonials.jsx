import styled from "styled-components";
import comment from "../../assets/images/comment.png";
import Title from "../Title";
import { useState } from "react";
import testimonialsList from "./testimonialsList";
import quote from "../../assets/images/quote.png";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(testimonialsList);

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

      <div className="center">
        <div className="image-container">
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
        </div>
      </div>

      <div className="scroll-btn">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
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
    /* border: 2px solid white; */
    display: flex;
    justify-content: center;
    width: 80vw;
    max-width: 1400px;
    margin: 0 auto;

    .image-container {
      /* border: 2px solid red; */
      width: 80%;
      height: 100%;
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      gap: 1.5rem;
      justify-content: center;
      align-items: center;

      .testimony {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        position: relative;

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

      .testimony:nth-child(2) .overlay {
        background: #db1e2d80;
      }
    }
  }
`;

export default Testimonials;
