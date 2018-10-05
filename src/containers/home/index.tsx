import { push } from 'connected-react-router'
import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { bindActionCreators, Dispatch } from 'redux'
import {
    decrement,
    decrementAsync,
    increment,
    incrementAsync,
    setName
} from '../../modules/counter'

interface IComponentState {
    name: string
}

class Home extends React.Component<TComponentProps, IComponentState> {
    state: IComponentState

    constructor(props: TComponentProps) {
        super(props)
        this.state = {
            name: props.name
        }
    }

    onChangeName = (event: any) => {
        this.setState({ name: event.target.value })
    }

    submitName = () => {
        this.props.setName(this.state.name)
            this.props.changePage()
    }

    changePage = () => {
        this.props.changePage()
    }

    render() {
        const props = this.props
        return (
            <div>
                <h1>Home</h1>
                <p>Count: {props.count}</p>

                <p>
                    <button onClick={props.increment}>Increment</button>
                    <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
                        Increment Async
                    </button>
                </p>

                <p>
                    <button onClick={props.decrement}>Decrement</button>
                    <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
                        Decrement Async
                    </button>
                </p>

                <p>
                    <input value={this.state.name} onChange={this.onChangeName} />
                    <button onClick={this.submitName}>
                        Submit Name
                    </button>
                </p>

                <p>
                    <button onClick={this.changePage}>
                        Go to about page via redux
                    </button>
                </p>
            </div>
        )
    }
}

interface IStateToProps {
    count: number
    isIncrementing: boolean
    isDecrementing: boolean
    name: string
}

const mapStateToProps = ({ counter }: any): IStateToProps => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing,
    name: counter.name
})

interface IDispatchToProps {
    increment: () => void
    incrementAsync: () => void
    decrement: () => void
    decrementAsync: () => void
    changePage: () => void
    setName: (name: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps =>
    bindActionCreators(
        {
            increment,
            incrementAsync,
            decrement,
            decrementAsync,
            changePage: () => push('/about-us'),
            setName
        },
        dispatch
)

type TComponentProps = RouteComponentProps<any> & IStateToProps & IDispatchToProps

export default connect<IStateToProps, IDispatchToProps, any>(
    mapStateToProps,
    mapDispatchToProps
)(Home)
