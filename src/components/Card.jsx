import React from "react";
import Star from "../assets/images/star.png";

const Card = ({
  id,
  title,
  description,
  price,
  coverImg,
  stats: { rating, reviewCount },
  location,
  openSpots,
}) => {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={coverImg} className="card-image" alt={title} />
      <div className="card-stats">
        <img src={Star} className="card-star" alt="star" />
        <span>{rating}</span>
        <span className="color-gray">({reviewCount}) •&nbsp;</span>
        <span className="color-gray">{location}</span>
      </div>
      <p className="card-title">{title}</p>
      <p className="card-price">
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
};

export default Card;
