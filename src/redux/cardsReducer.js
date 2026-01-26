import shortid from "shortid";
import strContains from "../utils/strContains";


const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

export const getFavoriteCards =(state) => state.cards.filter(card => card.isFavorite);
export const toggleCardFavorite = cardId => ({ type: TOGGLE_CARD_FAVORITE, payload: cardId });

export const addCard = payload => ({ type: ADD_CARD, payload});
export const removeCard = cardId => ({ type: REMOVE_CARD, payload: cardId});

export const getFilteredCards = ({ cards, searchText }, columnId) =>
    cards.filter(card =>
        card.columnId === columnId &&
        strContains(card.title, searchText)
    );

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  };
};

export default cardsReducer;