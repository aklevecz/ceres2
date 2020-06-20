import {
  HIDE,
  SHOW,
  SEED,
  FETCHED_DATA,
  FETCHING_DATA,
  CHANGE_TOPIC,
} from "../actions/view";

const VIEW_STATE = {
  view: false,
  loading: true,
  topic: "NOLA",
  photos: [],
  previews: [],
};

const viewReducer = (state = VIEW_STATE, action) => {
  switch (action.type) {
    case SHOW:
      return { ...state, view: true };
    case HIDE:
      return { ...state, view: false };
    case SEED:
      return {
        ...state,
        photos: [...action.photos],
        previews: [...action.previews],
      };
    case FETCHING_DATA:
      return { ...state, loading: true };
    case FETCHED_DATA:
      return { ...state, loading: false };
    case CHANGE_TOPIC:
      return { ...state, topic: action.topic };
    default:
      return state;
  }
};

export default viewReducer;
