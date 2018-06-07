import * as actionTypes from './actions';

const initialState = {
    open: false,
    currentImg: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HANDLE_OPEN:
            return {

            };
        case actionTypes.HANDLE_CLOSE:
            return {

            };
        default:
            return state;
    }
};

export default reducer;