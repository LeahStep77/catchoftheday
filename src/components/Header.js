import  React from "react";

const Header = (props) => {
    return(
      <header className="top">
      <h2>Event Talk</h2>
      <h5 className="tagline"><span>{props.tagline}</span></h5>
      </header>
    )
  }

export default Header;
