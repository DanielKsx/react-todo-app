import shortid from "shortid";

const createActionName = actionName => `apps/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

export const addColumn = payload => ({ type: ADD_COLUMN, payload });
export const getAllColumns = (state) => state.columns;
export const getColumnsByList = (state, listId) => state.columns.filter(column => column.listId === listId);


const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  };
};

export default columnsReducer;