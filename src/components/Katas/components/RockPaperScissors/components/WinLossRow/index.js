import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

export default class WinLossRow extends PureComponent{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        const {
            userChoice,
            cpuChoice,
            winner
        } = this.props
        return(
            <Outer>
                
            </Outer>
        )
    }
}