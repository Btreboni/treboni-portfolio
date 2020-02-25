import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

export default class CalcButton extends PureComponent{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    isOperator = (val) =>{
        return !isNaN(val) || val === "." || val === "=";
    }
    render(){
        const {
            isOperator
        } = this.props
        return(
            // <Outer className={`button ${this.isOperator(this.props.children) ? "" : "operator"}`}>
            <Outer isOperator={isOperator}>
                {this.props.children}
            </Outer>
        )
    }
}