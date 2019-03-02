import React, { PureComponent } from 'react'

import Outer from './styled/Outer'

export default class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return(
            <Outer>
                <h1>HOME!</h1>
            </Outer>
        )
    }
}