import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//components
import PriceRow from './components/PriceRow'

export default class StockAvgCalc extends PureComponent{
    constructor(props){
        super(props)
        this.state= {}
    }

    render(){
        return(
            <Outer>
                <PriceRow />
            </Outer>
        )
    }
}