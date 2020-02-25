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
                        <CalcButton>7</CalcButton>
                        <CalcButton>8</CalcButton>
                        <CalcButton>9</CalcButton>
                        <CalcButton>/</CalcButton>
                    </div>
                    <div className="row">
                        <CalcButton>4</CalcButton>
                        <CalcButton>5</CalcButton>
                        <CalcButton>6</CalcButton>
                        <CalcButton>*</CalcButton>
                    </div>
                    <div className="row">
                        <CalcButton>1</CalcButton>
                        <CalcButton>2</CalcButton>
                        <CalcButton>3</CalcButton>
                        <CalcButton>+</CalcButton>
                    </div>
                    <div className="row">
                        <CalcButton>.</CalcButton>
                        <CalcButton>0</CalcButton>
                        <CalcButton>=</CalcButton>
                        <CalcButton>-</CalcButton>
                    </div>
                </div>
            </Outer>
        )
    }
}