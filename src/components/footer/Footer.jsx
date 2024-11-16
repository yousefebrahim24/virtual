import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-sky-950  text-white p-5">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-5">
        {/* Left Section */}
        <div className="flex flex-col gap-10 items-center sm:items-start">
          <div className="flex flex-col gap-5 items-center sm:items-start">
            <h1>Virtual Learning</h1>
            <p className="text-center sm:text-left">
              Making the world a better place through constructing elegant hierarchies.
            </p>
          </div>
          <div className="flex flex-row justify-center gap-5">
            <Link to="/"><FaFacebookF /></Link>
            <Link to="/"><FaWhatsapp /></Link>
            <Link to="/"><FaTwitter /></Link>
            <Link to="/"><FaLinkedinIn /></Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 text-center sm:text-left">
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-center">Solutions</h2>
            <ul ClassName=" flex flex-col gap-20">
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Marketing</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Analytics</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Automation</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Commerce</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Insights</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-center">Support</h2>
            <ul ClassName=" flex flex-col gap-5">
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Submit ticket</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Documentation</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Automation</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Commerce</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Insights</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-center">Company</h2>
            <ul ClassName=" flex flex-col gap-5">
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">About</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Blog</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Jobs</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Press</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-center">Legal</h2>
            <ul ClassName=" flex flex-col gap-5">
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Terms of service</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">Privacy policy</Link></li>
              <li className="hover:bg-sky-800 rounded text-center "><Link to="/">License</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="my-5 border-gray-500" />
      <div className="text-center">
        <p>© 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;