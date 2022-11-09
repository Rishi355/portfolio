import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Email from "@iconscout/react-unicons/icons/uil-envelope";
import Phone from "@iconscout/react-unicons/icons/uil-phone";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="footer-mail">
        <Email color="white" size={"1.5rem"} />
        rishikeshs355@gmail.com</div>
        <div className="footer-phone">
        <Phone color="white" size={"1.5rem"} />8354915268</div>
        <div className="f-icons">

          <a href="https://www.instagram.com/rishikeshs355/"><Insta color="white" size={"3rem"} /></a>
          {/* <Insta color="white" size={"3rem"} /> */}
          <a href="https://www.facebook.com/profile.php?id=100022217718218"><Facebook color="white" size={"3rem"} /></a>
          {/* <Facebook color="white" size={"3rem"} /> */}
          <a href="https://www.linkedin.com/in/rishikesh-singh-a41a61209/"><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://github.com/Rishi355"><Gitub color="white" size={"3rem"} /></a>
          {/* <Gitub color="white" size={"3rem"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
