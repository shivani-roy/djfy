import About from "./About";
import SocialLinks from "./SocialLinks";
import Navbar from "./Navbar";
import wp from "../assets/images/wp.png";
import mail from "../assets/images/mail.png";
import phone from "../assets/images/phone.png";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <div className="center">
        <div className="icons">
          <div className="icon">
            <img
              src={wp}
              alt="whatsapp-logo"
              className="wp-logo"
            />
            <span>WhatsApp Support</span>
          </div>

          <div className="icon">
            <img
              src={mail}
              alt="mail"
              className="mail-img"
            />
            <span>team@djfyapp.com</span>
          </div>

          <div className="icon">
            <img
              src={phone}
              alt="phone"
              className="phone-img"
            />
            <span>+91 1234 5678 90</span>
          </div>
        </div>

        <p>Login / Register</p>
        <div className="links">
          <SocialLinks />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #0e1135;
  margin: 0 auto;
  height: 60px;
  display: none;
  padding: 1rem;

  @media screen and (min-width: 1100px) {
    display: block;
  }

  .center {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid white; */
    /* padding-top: 1rem; */

    .icons {
      display: flex;
      align-items: center;
      gap: 1rem;

      .icon {
        display: flex;
        gap: 10px;
        cursor: pointer;

        img {
          width: 10px;
          height: 10px;
          margin-top: 4px;
        }

        span {
          color: #bcbcbc;
          font-size: 12px;
          font-weight: 500;
        }
      }
    }

    p {
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      width: 100px;
    }

   
  }
`;
export default Header;
