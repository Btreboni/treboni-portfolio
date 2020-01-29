import React, { PureComponent } from 'react'

import Outer from './styled/Outer'
import Intro from './styled/Intro'
import IntroBold from './styled/IntroBold'
import IntroDiv from './styled/IntroDiv'

import profileImage from './profilePic.jpeg'

export default class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Outer>
                <img src={profileImage} alt="avatar" />
                <IntroDiv>
                    <Intro>
                        Welcome!
                    </Intro>            
                    <IntroBold>
                        My name is Burke
                    </IntroBold>
                    <Intro>
                        I am a full stack web developer
                    </Intro>
                </IntroDiv>
            </Outer>
        )
    }
}