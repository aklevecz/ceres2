import {
  HIDE,
  SHOW,
  SEED,
  FADE_IN,
  FADE_OUT,
  FETCHED_DATA,
  FETCHING_DATA,
  CHANGE_TOPIC
} from "../actions/view";

const VIEW_STATE = {
  view: false,
  loading: true,
  topic: "NOLA",
  photos: [],
  previews: []
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
        previews: [...action.previews]
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

const UI_STATE = {
  header: 1
};

const uiReducer = (state = UI_STATE, action) => {
  switch (action.type) {
    case FADE_IN:
      return { ...state, header: 1 };
    case FADE_OUT:
      return { ...state, header: 0 };
    default:
      return state;
  }
};

// export default combineReducers({
//   view: viewReducer,
//   ui: uiReducer
// });
