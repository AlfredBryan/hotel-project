import { ON_TEXT_CHANGE } from '../actions/actions';

const initialState = { images: []};

export default function ( state = initialState, action ) {
    switch(action.type) {
        case ON_TEXT_CHANGE:
        return {...state, images: action.payload.images };
    }
    return state;
}