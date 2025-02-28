import styled from "styled-components";
import faqIcon from "../../assets/images/faq.png";
import { useState } from "react";
import faqList from "./faqList";
import Title from "../Title";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Faq = () => {
  const [faqs, setFaqs] = useState(faqList);

  return (
    <Wrapper id="faq">
      <Title
        icon={faqIcon}
        subtitle="faq"
      />

      <div className="faq-container">
        {faqs.map(({ question }, index) => {
          return (
            <div
              key={index}
              className="faq"
            >
              <div className="content">
                <p className="heading">{question}</p>
                {index === 0 ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </div>

              {index === 0 ? (
                <div>
                  <p className="answer">
                    DJFY is a web app that revolutionizes the music experience
                    by enabling DJs, live musicians/bands, and street
                    performers/musicians to accept song requests and interact
                    with their audience in real-time. It provides a platform for
                    artists to create a new stream of income while enhancing
                    audience engagement during performances.
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 4rem;
  padding-top: 2rem;
  padding-bottom: 4rem;

  .faq-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    margin-left: 2rem;
    margin-right: 2rem;

    .faq {
      padding: 2rem;
      border-top: 2px solid gray;

      .content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .heading {
          font-size: 18px;
          font-weight: 500;
          line-height: 21px;
        }
      }

      .answer {
        font-weight: 400;
        font-size: 18px;
        max-width: 1062px;
        margin-top: 3rem;
      }

      svg {
        font-size: 2rem;
        cursor: pointer;
      }
    }

    .faq:last-child {
      border-bottom: 2px solid gray;
    }
  }
`;

export default Faq;
