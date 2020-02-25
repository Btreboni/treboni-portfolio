import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//components
import FancyButton from '../../../../../FancyButton'

const instructions = "This calculator allows the user to calculate the average price of a stock position.";
const instructions2 = "Input the  original price of the stock, and how many shares you purchased at that price. "
+ "Add in any additional shares you purchased, as well as the price, and you can then calculate the average price "
+ "of your position.";

export default class Instructions extends PureComponent{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    onChange = () =>{
        this.props.onChange();
    }
    render(){
        return(
            <Outer>
                <h3>{instructions}</h3>
                <h3>{instructions2}</h3>
                <FancyButton handleClick={this.onChange}>
                    Calculate
                </FancyButton>
            </Outer>
        )
    }
}