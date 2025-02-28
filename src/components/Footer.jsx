import styled from "styled-components";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <Wrapper>
      <div className="content">
        <p>© 2024 DjFy. All Rights Reserved</p>
        <div className="icons">
          <p>Connect -</p>
          <SocialLinks/>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #040514;
  height: 5rem;

  .content {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content:space-between;
    /* border: 2px solid white; */

    p {
      font-size: 14px;
      font-weight: 400;
      color: #82828a;
    }

    .icons {
      display: flex;
      gap: 2rem;
      align-items: center;

      img {
        margin-right: 1rem;
        cursor: pointer;
      }
    }
  }
`;
export default Footer;
