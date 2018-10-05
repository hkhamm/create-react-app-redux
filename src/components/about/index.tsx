import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'

const About = (props: TComponentProps) => (
    <div>
        <h1>About Page</h1>
        <p>Hello {props.name}</p>
        <p>Did you get here via Redux?</p>
    </div>
)

interface IStateToProps {
    name: string
}

const mapStateToProps = ({ counter }: any): IStateToProps => ({
    name: counter.name
})

type TComponentProps = RouteComponentProps<any> & IStateToProps

export default connect<IStateToProps, null, any>(
    mapStateToProps,
    null
)(About)
