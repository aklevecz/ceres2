import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import Lottie from "react-lottie";
import animationData from "../lottie/circle.json";

import styled from "styled-components";
import { CHIMP_URL } from "../actions/view";

const BottomWrapper = styled.div`
  font-weight: 600;
  margin: 1.7rem 1.2rem;
`;

const ImgTitle = styled.div`
  font-family: Arial;
  font-size: 2rem;
`;

const ImgDesc = styled.div`
  font-family: Euclid;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const ImgCard = ({ description, id, orientation, title, url }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <LazyLoad
      loader={() => <div>FUCK</div>}
      height={window.innerHeight / 2}
      offset={100}
    >
      <div>
        {!loaded && (
          <Lottie
            height={400}
            width={400}
            options={{ loop: true, autoplay: true, animationData }}
          />
        )}
        <img
          alt="forg"
          style={{
            display: loaded ? "block" : "none",
            maxWidth: "500px",
            transform: orientation === "portrait" ? "rotate(90deg)" : "",
          }}
          src={url}
          src={`${CHIMP_URL}/imgs/${id}.png`}
          width="100%"
          onLoad={(e) => {
            setLoaded(true);
          }}
          onError={() => setLoaded(true)}
        />
        <BottomWrapper>
          <ImgTitle>{title}</ImgTitle>
          <ImgDesc>{description}</ImgDesc>
        </BottomWrapper>
      </div>
    </LazyLoad>
  );
};

export default ImgCard;
