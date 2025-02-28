import styled from "styled-components";
import hr from "../assets/images/hr.png";
import logo from "../assets/images/logo.png";
import wp from "../assets/images/wp.png";
import mail from "../assets/images/mail.png";
import btn from "../assets/images/btn.png";
import captcha from "../assets/images/captcha.png";
import NavLinks from "./NavLinks";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <img
        src={hr}
        alt="hr"
        className="hr"
      />

      <div className="content">
        <div className="info">
          <img
            src={logo}
            alt="logo"
            className="logo"
          />
          <p>
            Connecting DJs and music enthusiasts for seamless event experiences
            and vibrant community engagement.
          </p>

          <div className="btn-container">
            <button>Sign Up as User</button>
            <button>Sign Up as DJ</button>
          </div>
        </div>

        <div className="links">
          <h3>Under the Hood</h3>
          <NavLinks />
        </div>

        <div className="contact-form">
          <h3>Help Desk</h3>
          <div className="icons">
            <div className="icon">
              <img
                src={wp}
                alt="whatsapp-logo"
                className="wp-logo"
              />
              <span>+91 1234 5678 90</span>
            </div>

            <div className="icon">
              <img
                src={mail}
                alt="mail"
                className="mail-img"
              />
              <span>team@djfyapp.com</span>
            </div>
          </div>

          <form className="form">
            <h5>Send Us your Message</h5>
            <div className="row-1">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                name="message"
                placeholder="Write Message"
                className="message"
              />
            </div>

            <div className="img-container">
              <img
                src={captcha}
                alt="captcha"
                className="captcha"
              />
              <img
                src={btn}
                alt="btn"
                className="form-btn"
              />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 2rem;
  padding-bottom: 5rem;
  .hr {
    width: 100%;
    height: 2px;
  }

  .content {
    display: flex;
    margin-top: 4rem;
    flex-wrap: wrap;
    gap: 5rem;
    padding: 2rem;
    /* justify-content: center; */

    .info {
      display: flex;
      flex-direction: column;

      .logo {
        width: 158px;
        margin-bottom: 1rem;
      }

      p {
        max-width: 400px;
      }

      .btn-container {
        display: flex;
        /* justify-content: center; */
        gap: 1rem;

        button {
          background: linear-gradient(#f6b910, #d71b2c);
          color: white;
          width: 195px;
          height: 50px;
          border: transparent;
          border-radius: 6px;
          font-weight: 500;
          font-size: 1rem;
          display: inline-block;
          margin-top: 1.75rem;
          cursor: pointer;
        }
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      h3 {
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 2rem;
      }

      a {
        display: block;
        text-decoration: none;
        color: white;
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 10px;
      }

      a:hover {
        opacity: 0.7;
      }
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

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

      .form {
        margin-top: 2rem;
        background: linear-gradient(#1b378280, #09173c33);
        padding: 1rem 2rem;
        border: 1px solid gray;
        border-radius: 12px;
        width: 490px;
        height: 260px;

        h5 {
          font-weight: 500;
          font-size: 14px;
          margin-bottom: 1rem;
        }

        .row-1 {
          display: flex;
          gap: 2rem;
          margin-bottom: 1rem;
        }
        .form-row {
          display: flex;
          flex-direction: column;

          input {
            background: #4c4cbe;
            color: white;
            border: none;
            outline: none;
            padding: 10px;
            border-radius: 4px;
          }

          input::placeholder{
            color: white;
          }

          .message {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
        }

        .img-container {
          display: flex;
          margin-top: 1rem;
          gap: 2rem;
        }
      }
    }
  }
`;
export default Contact;
