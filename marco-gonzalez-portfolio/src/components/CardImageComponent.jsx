import React from "react";

const CardImageComponent = ({
  imageSRC,
  cardTitle,
  cardText,
  buttonLink,
  buttonText,
}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imageSRC} alt="" />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
        <a href={buttonLink} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default CardImageComponent;
