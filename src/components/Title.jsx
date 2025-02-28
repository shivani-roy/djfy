import styled from "styled-components";
import BarGraph from "./BarGraph";

const Title = ({ icon, title, subtitle }) => {
  return (
    <Wrapper>
      <img
        src={icon}
        alt={title}
      />
      <h2>
        {title} <span>{subtitle}</span>
      </h2>
      <BarGraph />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  img {
    width: 54px;
  }

  h2 {
    font-weight: 500;
    font-size: 2rem;
    text-transform: uppercase;
  }

  span {
    color: #db1e2d;
  }
`;

export default Title;
