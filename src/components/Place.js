import React from "react";
import { connect } from "react-redux";
import ImgCard from "./ImgCard";
import { MainHeader } from "./styles";
import { Route } from "react-router-dom";
import Modal from "./Modal";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../lottie/circle.json";

const Container = styled.div`
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    margin: 1rem -3rem 0rem 4rem;
    /* flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    overflow: none; */
  }
`;

const CardContainer = styled.div`
  display: block;
  max-width: 500px;
  @media only screen and (min-width: 768px) {
    /* margin: 1rem 3rem; */
  }
`;

const Place = ({ history, match, photos }) => {
  const { place } = match.params;
  document.getElementsByTagName("body")[0].style.overflow = "";
  document.getElementsByTagName("body")[0].style.height = "";
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Route
        path={`${match.url}/view/:pic`}
        render={({ match }) => {
          const pic = photos.filter(
            p => p.id === parseInt(match.params.pic)
          )[0];
          pic && console.log(pic.orientation);
          document.getElementsByTagName("body")[0].style.overflow = "hidden";
          document.getElementsByTagName("body")[0].style.height = "100%";
          return (
            <Modal
              onClick={() => {
                history.goBack();
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%"
                }}
              >
                <Lottie
                  height={400}
                  width={400}
                  options={{ loop: true, autoplay: true, animationData }}
                />
                {pic && (
                  <img
                    width={pic.orientation === "landscape" ? "100%" : ""}
                    height={pic.orientation === "portrait" ? "100%" : ""}
                    src={pic.url}
                    style={{
                      transform:
                        pic.orientation === "portrait" ? "rotate(90deg)" : ""
                    }}
                    onLoad={e => {
                      console.log(e.target.height);
                    }}
                    onError={() => console.log("img error")}
                  />
                )}
              </div>
            </Modal>
          );
        }}
      />
      <MainHeader>{place}</MainHeader>
      <Container>
        {photos
          .filter(p => p.folder === place)
          .map(p => {
            return (
              <CardContainer
                key={p.url}
                to={`${match.url}/chicken/${p.id}`}
                onClick={() => {
                  console.log("ASDASDASD");
                  history.push(`${match.url}/view/${p.id}`);
                }}
              >
                <ImgCard
                  id={p.id}
                  url={p.url}
                  title={p.title}
                  description={p.description}
                  orientation={p.orientation}
                />
              </CardContainer>
            );
          })}
      </Container>
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
