import _ from 'lodash'
import {CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, SIGN_IN, SIGN_OUT} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        case EDIT_STREAM:
            //key interpolation syntax
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}