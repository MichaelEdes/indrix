import React, { useState, useEffect } from "react";
import "./PageHero.css";
import SouthIcon from "@mui/icons-material/South";
import { useTrail, a } from "@react-spring/web";

const Trail: React.FC<{ open: boolean; children: any }> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={"trail-text"} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

function PageHero() {
  const [arrowAnimation, setArrowAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setArrowAnimation((prev) => !prev); // Toggle the animation on and off
    }, 4000);
    return () => clearInterval(interval); // Clear the interval when the component is unmounted
  }, []);

  return (
    <div className="page-hero-container">
      <div className="page-hero-content">
        <div className="container">
          <Trail open={true}>
            <span>
              <h1>Improving humanity,</h1>
            </span>
            <span>
              <h1>
                one<i> imperfection</i> at
              </h1>
            </span>
            <span>
              <h1>a time</h1>
            </span>
          </Trail>
        </div>
      </div>
      <div id="down-arrow" className={arrowAnimation ? "animate-arrow" : ""}>
        <span>
          <SouthIcon />
        </span>
      </div>
    </div>
  );
}

export default PageHero;
