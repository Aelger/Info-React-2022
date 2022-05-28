import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string.isRequired,
};

function Header(props) {
  return (
    <div className="header">
      <div className="container-nav">
        <h1>{props.title}</h1>
      </div>
      <div>
          <input type="text" placeholder="Search for courses" className="search-input" />
      </div>
    </div>
  );
}

Header.propTypes = propTypes;

export default Header;
