import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img className="w-12" src={logo} alt="website-logo" />
          <p>
            <span className="text-2xl font-semibold my-2">
              s.<span className="text-yellow-500">A</span>cademy Industries Ltd.
            </span>
            <br />
            <span className="text-lg mt-2">
              Providing reliable tech since 2020
            </span>
          </p>
        </aside>
        <nav>
          <header className="footer-title">Follow Us</header>
          <p>Email : shamim401897@gmail.com</p>
          <p>Phone : 01738740639</p>
          <p>Address : Jamal,Sundargonj,Gaibandha</p>
        </nav>
        <nav>
          <header className="footer-title">Find On</header>
          <Link to="/" className="text-xl flex items-center gap-4">
            <FaFacebook></FaFacebook> <FaTwitter></FaTwitter>{" "}
            <FaLinkedin></FaLinkedin>
          </Link>
        </nav>
      </footer>

      <aside>
        <p className="text-center p-4 md:p-0">Copyright © 2023 - All right reserved by Muhammad Shamim Islam</p>
      </aside>
    </div>
  );
};

export default Footer;
