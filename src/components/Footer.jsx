import React from "react";

const Footer = () => {
  return (
    <footer className="footer items-center text-lg-start dark">
      <div className="text-center">
        &#169; {new Date().getFullYear()} Copyright Created By{" : "}
        <a href="mailto:prajapati.rahul373@gmail.com">Rahul Prajapati</a>
      </div>
    </footer>
  );
};

export default Footer;
