import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>
        <div>7.73</div>
        {/* 7.73<br/>CGPA */}
        <div>CGPA</div>
        </div>
        <span  style={{color: darkMode?'white':''}}>B.Tech</span>
        <span>IIIT UNA</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>
        <div>93.2%</div>
        </div>
        <span  style={{color: darkMode?'white':''}}>Intermediate</span>
        <span>R.P.M. Academy</span>
        <span>Gorakhpur</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>
        <div>10</div>
        <div>CGPA</div>
        </div>
        <span  style={{color: darkMode?'white':''}}>High School</span>
        <span>R.P.M. Academy</span>
        <span>Gorakhpur</span>
      </div>
    </div>
  );
};

export default Experience;
