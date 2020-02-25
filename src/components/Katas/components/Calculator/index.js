import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//components
import CalcButton from './components/CalcButton'

export default class Calculator extends PureComponent{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <Outer>
                <div className="calc-wrapper">
                    <div className="row">
                        <CalcButton isOperator={false}>7</CalcButton>
                        <CalcButton isOperator={false}>8</CalcButton>
                        <CalcButton isOperator={false}>9</CalcButton>
                        <CalcButton isOperator={true}>/</CalcButton>
                    </div>
                    <div className="row">
                        <CalcButton isOperator={false}>4</CalcButton>
                        <CalcButton isOperator={false}>5</CalcButton>
                        <CalcButton isOperator={false}>6</CalcButton>
                        <CalcButton isOperator={true}>*</CalcButton>
                    </div>
                    <div className="row">
                        <CalcButton isOperator={false}>1</CalcButton>
                        <CalcButton isOperator={false}>2</CalcButton>
                        <CalcButton isOperator={false}>3</CalcButton>
                        <CalcButton isOperator={true}>+</CalcButton>
                    </div>
                    <div className="row">
                        <CalcButton isOperator={false}>.</CalcButton>
                        <CalcButton isOperator={false}>0</CalcButton>
                        <CalcButton isOperator={false}>=</CalcButton>
                        <CalcButton isOperator={true}>-</CalcButton>
                    </div>
                </div>
            </Outer>
        )
    }
}