import { combineReducers } from 'redux'
import changeTheNumber from './upDown'
import changeTheCharacters from './upDowntxt'

const rootReducer = combineReducers({
    changeTheNumber,
    changeTheCharacters,
})

export default rootReducer;


