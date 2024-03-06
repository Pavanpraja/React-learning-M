import { combineReducers } from 'redux'
import changeTheNumber from './upDown'
import ChangeTheCharacters from './upDowntxt'

const rootReducer = combineReducers({
    changeTheNumber,
    ChangeTheCharacters,
})

export default rootReducer;


