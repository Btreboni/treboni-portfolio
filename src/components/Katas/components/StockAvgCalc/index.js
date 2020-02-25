import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//components
import Instructions from './components/Instructions'
import PriceRow from './components/PriceRow'

export default class StockAvgCalc extends PureComponent{
    constructor(props){
        super(props)
        this.state= {
            displayInstructions: true
        }
    }

    handleClick = () =>{
        this.setState({displayInstructions: true ? false : true});
    }

    render(){
        return(
            <Outer>
                <h1>Stock Price Average Calculator</h1>
                {
                    this.state.displayInstructions
                    ?
                    <Instructions  onChange={this.handleClick}/>
                    :
                    <PriceRow />
                }
            </Outer>
        )
    }
}