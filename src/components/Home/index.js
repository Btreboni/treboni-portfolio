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
                <h1>btreboni.com</h1>
                <img src={profileImage} alt="avatar" />
                <div id="intro">
                    <h4>
                        Hello and welcome to my website! My name is Burke Treboni, and I am a Full Stack Web Developer.
                    </h4>
                </div>
            </Outer>
        )
    }
}