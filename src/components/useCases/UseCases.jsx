import styled from "styled-components";
import caseList from "./caseList";
import { useState } from "react";

const UseCases = () => {
  const [cases, setCases] = useState(caseList);

  return (
    <Wrapper id="use-cases">
      <div>
        <h1>
          Use <span>Cases</span>
          <p className="underline">..........</p>
        </h1>
      </div>

      <div className="cases-container">
        {cases.map(({ image, title, content }, index) => {
          return (
            <div
              key={index}
              className="case"
            >
              <img
                src={image}
                alt="case-image"
                className="case-image"
              />

              <div className="case-content">
                <h3>{title}</h3>
                <p>{content}</p>
                <button>Register</button>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  background: #09173c;
  padding-top: 3rem;
  padding-bottom: 4rem;

  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 32px;

    span {
      color: #db1e2d;
    }

    .underline {
      margin-top: -0.7rem;
      text-align: center;
      color: #ed3e31;
      font-size: 24px;
    }
  }

  .cases-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    padding: 3rem;
    gap: 5rem;
    max-width: 1600px;

    .case {
      display: flex;
      flex-direction: column;
      /* max-width: 1400px; */
      justify-content: center;
      align-items: flex-start;

      @media screen and (min-width: 910px) {
        flex-direction: row;
        gap: 4rem;
      }

      .case-image {
        border-radius: 14px;
        width: 500px;
      }

      .case-content {
        padding-top: 2rem;
        display: flex;
        flex-direction: column;

        h3 {
          font-weight: 500;
          color: #ed3e31;
          font-size: 2rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
          text-align: justify;
        }

        p {
          max-width: 600px;
          font-size: 1rem;
          line-height: 20px;
          font-weight: 400;
          text-align: justify;
          opacity: 0.8;
        }

        button {
          background: linear-gradient(#f6b910, #d71b2c);
          color: white;
          width: 144px;
          height: 40px;
          border: transparent;
          border-radius: 6px;
          font-weight: 500;
          font-size: 1rem;
          display: inline-block;
          margin-top: 2rem;
          cursor: pointer;
        }
      }
    }

    .case:nth-child(even) {
      h3 {
        color: #fddf09;
      }
    }

    @media screen and (min-width: 900px) {
      .case:nth-child(even) {
        flex-direction: row-reverse;
      }
    }
  }
`;
export default UseCases;
