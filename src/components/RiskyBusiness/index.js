import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

export default class RiskyBusiness extends PureComponent{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <Outer>
                <h1>TESTING</h1>
            </Outer>
        )
    }
}