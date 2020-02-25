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
            numberDisplay: null,
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

    componentWillMount(){
        debugger
        this.initialState = this.state
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    calculate = () => {
        const {
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

        if(rowOneSharesVal === null || isNaN(rowOneSharesVal) || rowOnePriceVal === null || isNaN(rowOnePriceVal)){
            alert("Please begin in the first column, first row, and make sure both the Shares Bought/Purchased Price values have been entered.");
        } else {
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
                let amountIsNullOrNaN = iteration.amount === null || isNaN(iteration.amount);
                let priceIsNullOrNan = iteration.price === null || isNaN(iteration.price);
                debugger
                if((amountIsNullOrNaN && !priceIsNullOrNan) || (!amountIsNullOrNaN && priceIsNullOrNan)){
                    alert("Only completed rows with both the Shares Bought & Purchase Price will be included in the calculated average.");
                } else {
                    debugger
                    if((!amountIsNullOrNaN) && (!amountIsNullOrNaN)){
                        trade += iteration.amount * iteration.price;
                        shares += iteration.amount;
                    }
                    debugger
                    if(i === 7){
                        avg = trade / shares;
                        avg = avg.toFixed(2);
                        avg = "$" + avg + "/share";
                        debugger
                    }
                }
            }
            
            this.setState({numberDisplay: avg});
        }
    }

    recalc = () => {
        this.setState({            
            numberDisplay: null,
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
        });
    }

    render(){
        const {
            numberDisplay
        } = this.state;
        
        let tr = this.state;
        debugger
        return(
            <Outer>
                <h1>Stock Price Average Calculator</h1>
                {
                    numberDisplay ?
                    <div>
                        <div>
                            <h2>{numberDisplay}</h2>
                        </div>
                        <div className="button-row">
                            <FancyButton handleClick={this.recalc}>
                                    Recalculate
                            </FancyButton>
                        </div>
                    </div>
                    :
                        
                    <div>
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
                    </div>
                }    
            </Outer>
        )
    }
}