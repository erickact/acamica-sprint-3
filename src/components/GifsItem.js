import React from "react";

const GifsItem = ({ images, bitly_url }) => {
  return (
    <a className="gifs-item" href={bitly_url} target="_blank" rel="noreferrer">
      <img src={images.original.url} alt="" />
    </a>
  );
};

export default GifsItem;
