import About from "./About";
import SocialLinks from "./SocialLinks";
import Navbar from "./Navbar";
import wp from "../assets/images/wp.png";
import mail from "../assets/images/mail.png";
import phone from "../assets/images/phone.png";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      {/* <Wrapper>
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
        <div>
          <p>Login / Register</p>
          <SocialLinks />
        </div>
      </Wrapper> */}

      <Navbar />
      <About />
    </div>
  );
};

const Wrapper = styled.section`
  .icons {
    display: flex;
    margin-top: 2rem;
    align-items: center;
    gap: 4rem;

    .icon {
      display: flex;
      gap: 10px;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
export default Header;
