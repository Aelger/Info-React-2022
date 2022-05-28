import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

function Card(props) {
  return (
    <div className="border-card card-size card-body">
      <img src={props.image} alt="img" className="img-size" />
      <div className="card-text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.link} className="links">{props.linkName}</a>
      </div>
      
    </div>
  );
}

Card.propTypes = propTypes;

export default Card;
