import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//components
import FancyTitleInput from '../../../../../FancyTitleInput'

//constants
const inputArr = [
    {key:1, sharesName: "rowOneSharesVal", pricesName: "rowOnePriceVal" },
    {key:2, sharesName: "rowTwoSharesVal", pricesName: "rowTwoPriceVal" },
    {key:3, sharesName: "rowThreeSharesVal", pricesName: "rowThreePriceVal" },
    {key:4, sharesName: "rowFourSharesVal", pricesName: "rowFourPriceVal" },
    {key:5, sharesName: "rowFiveSharesVal", pricesName: "rowFivePriceVal" },
    {key:6, sharesName: "rowSixSharesVal", pricesName: "rowSixPriceVal" },
    {key:7, sharesName: "rowSevenSharesVal", pricesName: "rowSevenPriceVal" },
    {key:8, sharesName: "rowEightSharesVal", pricesName: "rowEightPriceVal" },
];

export default class PriceRow extends PureComponent{
    constructor(props){
        // this.handleChange = this.handleChange();
        super(props)
        this.state = {}
    }

    handleChange = (e) =>{
        console.log(e.target)
        debugger
    }

    render(){
        return(
            <Outer>
                {
                    inputArr.map((option) =>{
                        return <div key={option.key}>
                            <div className="cell">
                                <FancyTitleInput name={option.sharesName}
                                    placeholder={"Shares Bought"} 
                                    handleChange={this.handleChange}/>
                            </div>
                            <div className="cell">
                                <FancyTitleInput name={option.pricesName}
                                    placeholder={"Purchased Price"} 
                                    handleChange={this.handleChange}/>
                            </div>
                        </div>
                    })
                }
            </Outer>
        )
    }
}