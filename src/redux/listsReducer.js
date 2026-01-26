import shortid from "shortid";
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

export const getListById = (state, listId) => state.lists.find(list => list.id === listId);
export const getAllLists = (state) => state.lists;

export const addList = payload => ({ type: ADD_LIST, payload});

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  };
};

export default listsReducer;