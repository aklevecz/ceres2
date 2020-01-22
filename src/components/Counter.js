import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/counter";

const Counter = props => (
  <div>
    Counter: {props.count}
    {JSON.stringify(props.view)}
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  count: state.count,
  view: state.view
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
