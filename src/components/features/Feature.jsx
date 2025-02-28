import styled from "styled-components";

const Feature = ({ icon, title, content }) => {
  return (
    <Wrapper>
      <div className="icon-container">
        <img
          src={icon}
          alt="icon"
        />
      </div>

      <div className="content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid white;
  border-radius: 2rem;
  background: linear-gradient(#1b378280, #09173c33);
  position: relative;
  margin: 0 auto;
  min-height: 275px;

  .icon-container {
    position: absolute;
    width: 80px;
    height: 80px;
    background: linear-gradient(to right, #ed3e31, #eda231);
    border-radius: 50%;
    top: -35px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin-top: 2rem;

    h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    p {
      font-size: 14px;
    }
  }
`;

export default Feature;
