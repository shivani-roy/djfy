import logo from "/logo.png";
import logobg from "../assets/images/logo-bg.png";
import hr from "../assets/images/hr.png";
import styled from "styled-components";
import navbg from "../assets/images/nav-bg.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import NavLinks from "./NavLinks";

const navLinksLeft = [
  {
    page: "About Us",
    url: "#about",
  },
  {
    page: "Use Cases",
    url: "#use-cases",
  },
  {
    page: "Events",
    url: "#events",
  },
];

const navLinksRight = [
  {
    page: "Web Apps",
    url: "#web-apps",
  },
  {
    page: "FAQ",
    url: "#faq",
  },
  {
    page: "Contact Us",
    url: "#contact",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <Wrapper>
      <img
        src={hr}
        alt=""
      />

      <img
        src={navbg}
        alt=""
        className="nav-bg"
      />
      <div className="links">
        <div className="left">
          {navLinksLeft.map(({ page, url }, index) => {
            return (
              <a
                href={url}
                key={index}
              >
                {page}
              </a>
            );
          })}
        </div>
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

        <div className="right">
          {navLinksRight.map(({ page, url }, index) => {
            return (
              <a
                href={url}
                key={index}
              >
                {page}
              </a>
            );
          })}
        </div>
      </div>

      <div className="mobile-menu">
        <div
          className="nav-icon"
          onClick={toggleShow}
        >
          {<FaBars />}
        </div>

        <div className={`sidebar-container ${show ? "show-sidebar" : ""}`}>
          <div className="content">
            <button
              className="close-btn"
              onClick={toggleShow}
            >
              <FaTimes />
            </button>

            <div className="nav-links">
              <NavLinks toggleShow={toggleShow} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  margin-top: -10px;
  .logo-container {
    display: flex;
    justify-content: center;
    position: relative;
    left: 6rem;

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
      margin-top: -8px;
    }
  }
  @media screen and (min-width: 1100px) {
    .logo-container {
      left: 0;
    }
  }

  .nav-bg {
    margin-top: -2px;
    height: 91px;
    position: absolute;
    width: 100%;
    top: -1px;
    left: 0;
  }

  .links {
    display: flex;
    position: relative;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
    z-index: 3;

    .left {
      display: flex;
      gap: 4rem;
      margin-top: 1rem;
    }

    .right {
      display: flex;
      gap: 4rem;
      margin-top: 1rem;
    }

    h3 {
      font-weight: 700;
      font-size: 16px;
      margin-bottom: 2rem;
    }

    a {
      text-decoration: none;
      color: white;
      font-weight: 600;
      font-size: 16px;
      margin-right: 10px;
    }

    a:hover {
      opacity: 0.7;
    }
  }

  .links {
    .left,
    .right {
      display: none;
    }
  }

  .mobile-menu {
    .nav-icon {
      position: fixed;
      right: 10%;
      top: 3%;
      font-size: 2rem;
      cursor: pointer;
      z-index: 20;
    }

    .sidebar-container {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: -1;
      opacity: 0;
      transition: all linear 0.2s;
      visibility: hidden;
    }

    .show-sidebar {
      z-index: 99;
      opacity: 1;
      visibility: visible;
    }

    .content {
      background: white;
      width: 90vw;
      height: 95vh;
      border-radius: 4px;
      padding: 4rem 2rem;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .close-btn {
      position: absolute;
      background: transparent;
      border: none;
      top: 3rem;
      right: 3rem;
      font-size: 2rem;
      color: #ed3e31;
      cursor: pointer;
    }

    .close-btn:hover {
      opacity: 0.7;
    }

    .nav-links {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        display: block;
        color: black;
        text-decoration: none;
        padding: 1rem;
        text-align: center;
      }

      a:hover {
        opacity: 0.7;
      }
    }
  }

  @media screen and (min-width: 1100px) {
    .links {
      .left,
      .right {
        display: flex;
      }
    }

    .mobile-menu {
      display: none;
    }
  }
`;
export default Navbar;
