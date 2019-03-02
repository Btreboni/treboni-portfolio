import React, { PureComponent } from 'react'

import Outer from './styled/Outer'

import profileImage from './profilePic.jpeg'

export default class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Outer>
                <h1>&lt;Burke Treboni /&gt;</h1>
                <img src={profileImage} alt="avatar" />
            </Outer>
        )
    }
}