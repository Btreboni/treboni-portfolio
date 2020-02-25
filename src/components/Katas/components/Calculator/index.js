import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

export default class Calculator extends PureComponent{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <Outer>
                <h1>Testing</h1>
            </Outer>
        )
    }
}