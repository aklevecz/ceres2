import React from "react";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";

const Place = ({ match, photos }) => {
  const { place } = match.params;
  console.log(photos);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>{place}</h2>
      {photos.map(p => {
        return (
          <LazyLoad height={500} offset={100}>
            <div style={{ height: 500 }}>
              <img src={p.url} width={500} />
            </div>
          </LazyLoad>
        );
      })}
    </div>
  );
};

const mapState = state => {
  const {
    view: { photos }
  } = state;
  return { photos };
};

export default connect(mapState)(Place);
