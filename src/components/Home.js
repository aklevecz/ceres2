import React from "react";
import { connect } from "react-redux";

const Home = ({ history, loading, previews }) => {
  if (loading)
    return (
      <div>
        <div>loading...</div>
      </div>
    );
  console.log(previews);
  return (
    <div>
      {previews.map(p => {
        return (
          <img
            key={p.title}
            src={p.url}
            width={500}
            onClick={() => history.push(`/place/${p.folder}`)}
          />
        );
      })}
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
