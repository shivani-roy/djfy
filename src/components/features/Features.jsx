import { useState } from "react";
import styled from "styled-components";
import featuresList from "./featuresList";
import Feature from "./Feature";

const Features = () => {
  const [features, setFeatures] = useState(featuresList);

  return (
    <Wrapper>
      <div>
        <h1>
          Here's how <span>DJFY works</span>
          <p className="underline">..........</p>
        </h1>
      </div>

      <div className="features">
        {features.map((feature, index) => {
          return (
            <Feature
              key={index}
              {...feature}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 1600px;
  padding: 2rem 10rem;
  margin-bottom: 5rem;

  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 32px;

    span {
      color: #ec3533;
    }

    .underline {
      margin-top: -1.2rem;
      text-align: center;
      color: #ed3e31;
    }
  }

  .features {
    margin-top: 6rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    justify-content: center;
    align-items: center;
    gap: 2rem;
    row-gap: 4rem;
  }
`;
export default Features;
