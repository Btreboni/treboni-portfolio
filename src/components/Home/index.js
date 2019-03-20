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
                <h1>&lt;BTREBONI.COM /&gt;</h1>
                <h2>&lt;BTREBONI.COM /&gt;</h2>
                <img src={profileImage} alt="avatar" />
                <div id="intro">
                    <h4>
                        Hello! My name is Burke Treboni, and I am a Columbus based full stack web developer.
                        I am currently a consultant with HMB at The Ohio Treasury working on the Ohio Pools Collateral
                        System (OPCS).
                    </h4>
                </div>
            </Outer>
        )
    }
}