import { PROMO_CODE } from '../action/types';

const initialState = {
    open: false,
    value: ''
};

export default function(state = initialState, action){
    switch(action.type) {
        return {
            ...state,
            value: action.payload
        };
        default:
            return state;
    }
}