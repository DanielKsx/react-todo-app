
const creationActionName = actionName => `app/search/${actionName}`;
const SET_SEARCH_TEXT = creationActionName('SET_SEARCH_TEXT');

export const updateSearchText = payload => ({ type: SET_SEARCH_TEXT, payload});

const searchTextReducer = (statePart = '', action) => {
  switch(action.type) {
    case SET_SEARCH_TEXT:
      return action.payload
    default:
      return statePart;
  };
};

export default searchTextReducer;