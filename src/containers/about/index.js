import React from 'react'
import { connect } from 'react-redux'

const About = (props) => (
  <div>
    <h1>About Page</h1>
    <p>Hello {props.name}</p>
    <p>Did you get here via Redux?</p>
  </div>
)

const mapStateToProps = ({ counter }) => ({
  name: counter.name
})

export default connect(
  mapStateToProps,
  null
)(About)
