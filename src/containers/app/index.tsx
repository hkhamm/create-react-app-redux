import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import About from '../about'
import Home from '../home'

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
        </header>

        <main>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/about-us" component={About} />
        </main>
    </div>
)

export default App
