import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//components
import FancyTitleInput from '../../../../../FancyTitleInput'
import FancyButton from '../../../../../FancyButton'

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
        super(props)
        this.state = {
            rowOneSharesVal: null,
            rowTwoSharesVal: null,
            rowThreeSharesVal: null,
            rowFourSharesVal: null,
            rowFiveSharesVal: null,
            rowSixSharesVal: null,
            rowSevenSharesVal: null,
            rowEightSharesVal: null,
            rowOnePriceVal: null,
            rowOnePriceVal: null,
            rowThreePriceVal: null,
            rowFourPriceVal: null,
            rowFivePriceVal: null,
            rowSixPriceVal: null,
            rowSevenPriceVal: null,
            rowEightPriceVal: null
        }
    }

    handleChange = (e) =>{
        let ease = e.target.name;
        let test = e.target.value
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <Outer>
                <div className="button-row">
                    <FancyButton handleClick={this.calculate}>
                        Calculate
                    </FancyButton>
                </div>
                {
                    inputArr.map((option) =>{
                        return <div className="row" key={option.key}>
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