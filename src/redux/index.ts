import { combineReducers } from 'redux'
import counter, { ICounterState } from './counter'

export interface IState {
    counter: ICounterState
}

export default combineReducers({
    counter
})
