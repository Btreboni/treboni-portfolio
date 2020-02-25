import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

export default class CalcButton extends PureComponent{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <Outer>
                {this.props.children}
            </Outer>
        )
    }
}