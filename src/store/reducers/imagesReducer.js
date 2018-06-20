import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE
} from '../actions'

const initialState = {
  fetching: false,
  images: null,
  searchText: "",
  amount: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES_REQUEST:
      return { ...state, 
        searchText: action.searchText, 
        amount: action.amount,
        fetching: true, 
        error: null 
      };
    case GET_IMAGES_SUCCESS:
      return { ...state, fetching: false, images: action.images };
    case GET_IMAGES_FAILURE:
      return { ...state, fetching: false, images: null, error: action.error };
    default:
      return state;
  }
}