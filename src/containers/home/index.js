import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  setName
} from '../../modules/counter'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name
    }
  }

  onChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  submitName = () => {
    this.props.setName(this.state.name)
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
          <button onClick={() => props.changePage()}>
            Go to about page via redux
          </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
  name: counter.name
})

const mapDispatchToProps = dispatch =>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
