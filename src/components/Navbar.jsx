import logo from "../../public/logo.png";
import logobg from "../assets/images/logo-bg.png";
import hr from "../assets/images/hr.png";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <Wrapper>
      <img
        src={hr}
        alt=""
      />
      <div className="logo-container">
        <img
          src={logobg}
          alt=""
          className="logo-bg"
        />

        <img
          src={logo}
          alt="logo"
          className="logo"
        />
      </div>

      <div className="links">
        {/* <NavLinks /> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .logo-container {
    display: flex;
    justify-content: center;
    position: relative;

    .logo {
      position: absolute;
      width: 97px;
      height: 102px;
      z-index: 2;
    }

    .logo-bg {
      position: absolute;
      width: 232px;
      height: 132px;
      z-index: 1;
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
      text-decoration: none;
      color: white;
      font-weight: 400;
      font-size: 14px;
      margin-right: 10px;
    }

    a:hover {
      opacity: 0.7;
    }
  }
`;
export default Navbar;
