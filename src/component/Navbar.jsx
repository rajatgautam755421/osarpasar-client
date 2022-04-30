import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.png";
const Navbarr = () => {
  const [user, setUser] = useState({});
  const { pathname } = useLocation();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, [pathname]);
  const handleClick = () => {
    localStorage.removeItem("userInfo");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ opacity: "1" }}
      >
        <div className="container-fluid">
          <div className="college__logo__main">
            <img src={Logo} alt="" />
          </div>{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "none" }}
          >
            <Hamburger />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ml-auto  mb-lg-0"
              style={{ marginLeft: "auto" }}
            >
              <li className="nav-item" style={{ margin: "0px auto" }}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  activee" : "nav-link "
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  activee" : "nav-link "
                  }
                  to={"/track"}
                >
                  Track
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  activee" : "nav-link "
                  }
                  to={"/shipment"}
                >
                  Shipment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  activee" : "nav-link "
                  }
                  to={"/service"}
                >
                  Our Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  activee" : "nav-link "
                  }
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
              {user ? (
                user.email === "admin@gmail.com" ? (
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-link  activee" : "nav-link "
                      }
                      to={"/dashboard"}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                ) : null
              ) : null}

              {user ? (
                <li className="nav-item">
                  <a href="/" onClick={handleClick} className="nav-link ">
                    Logout
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link  activee" : "nav-link "
                    }
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbarr;
