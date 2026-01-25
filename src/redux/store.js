import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

export const getFilteredCards = ({ cards, searchText }, columnId) =>
    cards.filter(card =>
        card.columnId === columnId &&
        strContains(card.title, searchText)
    );

export const getAllColumns = (state) => state.columns;
export const getColumnsByList = (state, listId) => state.columns.filter(column => column.listId === listId);
export const getListById = (state, listId) => state.lists.find(list => list.id === listId);
export const getAllLists = (state) => state.lists;

export const getFavoriteCards =(state) => state.cards.filter(card => card.isFavorite);


    

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload});
export const addList = payload => ({ type: 'ADD_LIST', payload});
export const updateSearchText = payload => ({ type: 'SET_SEARCH_TEXT', payload});

export const toggleCardFavorite = cardId => ({ type: 'TOGGLE_CARD_FAVORITE', payload: cardId });



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }],
            };
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }],
            };
        case 'ADD_LIST':
            return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }],
            };
        case 'SET_SEARCH_TEXT':
            return {...state, searchText: action.payload
            };
        case 'TOGGLE_CARD_FAVORITE':
            return { ...state, cards: state.cards.map(card => card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card),
            };    
            default:
                return state;
    }
};




const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;