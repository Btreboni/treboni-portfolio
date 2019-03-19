import React, {PureComponent} from 'react'

import Outer from './styled/Outer'

export default class Katas extends PureComponent{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <Outer>
                <h1>KATAS</h1>
            </Outer>
        )
    }
}