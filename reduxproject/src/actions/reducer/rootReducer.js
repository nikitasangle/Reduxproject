import handleMyCounter from "./counterReducer";
import { combineReducers } from 'redux'

const rootReducer = combineReducers( {
    handleMyCounter
})

export default rootReducer
