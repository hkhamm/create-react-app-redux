import { connectRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import rootReducer from './redux'

export const history = createHistory()

const initialState = {}
const middleware = [thunk, routerMiddleware(history)]

let composedEnhancers: StoreEnhancer<any>

if (process.env.NODE_ENV === 'development') {
    composedEnhancers = composeWithDevTools(applyMiddleware(...middleware))
} else {
    composedEnhancers = compose(applyMiddleware(...middleware))
}

export default createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
)
