import { StyledComponentProps, withStyles } from '@material-ui/core'
import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import About from '../about'
import Home from '../home'

const styles = (): any => ({
    root: {
        padding: '24px'
    }
})

const Routes = (props: TComponentProps) => {
    const {
        classes
    } = props

    if (classes === undefined) {
        return null
    }

    return (
        <div className={classes.root}>
            <header>
                <Link to="/">Home</Link>
                {' | '}
                <Link to="/about-us">About</Link>
            </header>

            <main>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/about-us" component={About} />
            </main>
        </div>
    )
}

type TComponentProps = StyledComponentProps

export default withStyles(styles)(Routes)
