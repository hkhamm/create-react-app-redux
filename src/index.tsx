import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app'
import store, { history } from './store'

import './index.css'

const target = document.querySelector('#root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    target
)
