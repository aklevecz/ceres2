//export const CHIMP_URL = "https://chimpstagram-upload.glitch.me";
export const CHIMP_URL = "https://traysimay.github.io/chimp-cms";
//export const ALL_END = "getgrams";
export const ALL_END = "data/frog.json";
export const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const SHOW = "SHOW";
export const HIDE = "HIDE";
export const SEED = "SEED";

export const FADE_IN = "FADE_IN";
export const FADE_OUT = "FADE_OUT";

export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHED_DATA = "FETCHED_DATA";

export const CHANGE_TOPIC = "CHANGE_TOPIC";

export const fetchData = () => {
  return async function (dispatch) {
    dispatch({ type: FETCHING_DATA });
    const resp = await fetch(`${CHIMP_URL}/${ALL_END}`);
    const data = await resp.json();
    const { previews, photos } = data;
    dispatch({ type: SEED, previews, photos });
    dispatch({ type: FETCHED_DATA });
  };
};

export const showTopic = (topic, n) => {
  return async function (dispatch) {
    await dispatch({ type: CHANGE_TOPIC, topic });
    // navigateToPage(n, "Topic");
  };
};
