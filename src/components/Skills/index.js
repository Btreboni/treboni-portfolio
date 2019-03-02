import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

export default class Skills extends PureComponent{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <Outer>
                <h1>SKILLS</h1>
            </Outer>
        )
    }
}