import React, { PureComponent } from 'react'

//libraries
import NumberFormat from 'react-number-format';

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
            rowTwoPriceVal: null,
            rowThreePriceVal: null,
            rowFourPriceVal: null,
            rowFivePriceVal: null,
            rowSixPriceVal: null,
            rowSevenPriceVal: null,
            rowEightPriceVal: null
        }
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    calculate = () => {
        const {
            numberDisplay,
            rowOneSharesVal,
            rowTwoSharesVal,
            rowThreeSharesVal,
            rowFourSharesVal,
            rowFiveSharesVal,
            rowSixSharesVal,
            rowSevenSharesVal,
            rowEightSharesVal,
            rowOnePriceVal,
            rowTwoPriceVal,
            rowThreePriceVal,
            rowFourPriceVal,
            rowFivePriceVal,
            rowSixPriceVal,
            rowSevenPriceVal,
            rowEightPriceVal
        } = this.state;

        if(rowOneSharesVal === null || isNaN(rowOneSharesVal)){
            alert("Please begin in the first column, first row, and make sure both the Shares Bought/Purchased Price values have been entered.");
        }

        let dataArr = [
            {amount: parseFloat(rowOneSharesVal), price: parseFloat(rowOnePriceVal)},
            {amount: parseFloat(rowTwoSharesVal), price: parseFloat(rowTwoPriceVal)},
            {amount: parseFloat(rowThreeSharesVal), price: parseFloat(rowThreePriceVal)},
            {amount: parseFloat(rowFourSharesVal), price: parseFloat(rowFourPriceVal)},
            {amount: parseFloat(rowFiveSharesVal), price: parseFloat(rowFivePriceVal)},
            {amount: parseFloat(rowSixSharesVal), price: parseFloat(rowSixPriceVal)},
            {amount: parseFloat(rowSevenSharesVal), price: parseFloat(rowSevenPriceVal)},
            {amount: parseFloat(rowEightSharesVal), price: parseFloat(rowEightPriceVal)}
        ];

        let trade = 0;
        let shares = 0;
        let avg = 0;

        for(let i = 0; i < 8; i++){
            let iteration = dataArr[i];
            debugger
            let amountIsNullOrNaN = iteration.amount === null || isNaN(iteration.amount);
            let priceIsNullOrNan = iteration.price === null || isNaN(iteration.price);
            
            if((amountIsNullOrNaN && !priceIsNullOrNan) || (!amountIsNullOrNaN && priceIsNullOrNan)){
                alert("Please make sure that all of your entries are complete using only numbers.");
            }

            if((!amountIsNullOrNaN) && (!amountIsNullOrNaN)){
                trade += iteration.amount * iteration.price;
                shares += iteration.amount;
            }

            if(i === 7){
                avg = trade / shares;
            }
        }
        debugger
        this.setState({numberDisplay: avg});
    }

    render(){
        return(
            <Outer>
                <h1>Stock Price Average Calculator</h1>
                {
                    this.state.numberDisplay ?
                    <NumberFormat value={this.state.numberDisplay} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    :
                    ""
                }
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