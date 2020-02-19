import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import Lottie from "react-lottie";
import EyeAnimation from "../lottie/eye.json";
import HelloAnimation from "../lottie/hello.json";

const PlaceHeader = styled.div`
  font-family: Arial;
  font-size: 5rem;
  letter-spacing: 5px;
  text-align: center;
`;

const shadowFade = keyframes`
0% {
  box-shadow: 14px 14px #584848;
}
50% {
  box-shadow: 14px 14px #FFFFFF;
}
100% {
  box-shadow: 14px 14px #584848;
}
`;

const PlaceContainer = styled.div`
  width: 500px;
  margin: 2rem;
  border: 3px black solid;
  box-shadow: 14px 14px #584848;
  max-width: 80%;
  animation: ${shadowFade} 5s linear infinite;
`;

const Home = ({ history, loading, previews }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (!animate) return;
    const rando = Math.random() * 10000;
    setTimeout(() => {
      setAnimate(false);
    }, rando);
  }, [animate]);
  if (loading)
    return (
      <div>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: HelloAnimation
          }}
        />
      </div>
    );
  return (
    <div>
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        <Lottie
          isStopped={animate}
          options={{
            loop: false,
            autoplay: true,
            animationData: EyeAnimation
          }}
          eventListeners={[
            { eventName: "complete", callback: () => setAnimate(true) }
          ]}
        />
      </div>
      <div style={{ display: window.innerWidth > 768 ? "flex" : "block" }}>
        {previews.map(p => {
          return (
            <PlaceContainer key={p.title}>
              <img
                style={{ display: "block", margin: "auto", width: "100%" }}
                src={p.url}
                onClick={() => history.push(`/place/${p.folder}`)}
              />
              <PlaceHeader>{p.folder}</PlaceHeader>
            </PlaceContainer>
          );
        })}
      </div>
    </div>
  );
};

const mapState = state => {
  const {
    view: { loading, previews }
  } = state;
  return { loading, previews };
};

export default connect(mapState)(Home);
