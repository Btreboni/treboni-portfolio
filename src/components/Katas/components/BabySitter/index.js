import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

//components
import FancyButton from '../../../FancyButton'
import FancyDropdown from '../../../FancyDropdown'
import Title from './components/BabySitterTitle'

//titles
const startTimeTitle = "Enter your start time";
const bedTimeTitle = "Enter what time you will put the children to bed";
const clockOffTitle = "Enter what time you will clock off ";

//options
const timeOptionsList = [
    {value: 0, display:"Select a time"},
    {value: 5, display:"5pm"},
    {value: 5.5, display:"5:30pm"},
    {value: 6, display:"6pm"},
    {value: 6.5, display:"6:30pm"},
    {value: 7, display:"7pm"},
    {value: 7.5, display:"7:30pm"},
    {value: 8, display:"8pm"},
    {value: 8.5, display:"8:30pm"},
    {value: 9, display:"9pm"},
    {value: 9.5, display:"9:30pm"},
    {value: 10, display:"10pm"},
    {value: 10.5, display:"10:30pm"},
    {value: 11, display:"11pm"},
    {value: 11.5, display:"11:30pm"},
    {value: 12, display:"12am"},
    {value: 12.5, display:"12:30am"},
    {value: 13, display:"1am"},
    {value: 13.5, display:"1:30am"},
    {value: 14, display:"2am"},
    {value: 14.5, display:"2:30am"},
    {value: 15, display:"3am"},
    {value: 15.5, display:"3:30am"},
    {value: 16, display:"4am"}
];

//rates
const startToDownTimeRate = 12;
const downTimeToMidnightRate = 8;
const afterMidnightRate = 16;

export default class BabySitterKata extends PureComponent {
    constructor(props){
        super(props)
        this.handleStartTimeChange = this.handleOptionsChange('startTimeVal');
        this.handleBedTimeChange = this.handleOptionsChange('bedTimeVal');
        this.handleEndTimeChange = this.handleOptionsChange('endTimeVal');
        this.state = {
            showKata: false,
            showTitle: true,
            displayWage: false,
            displayDropDownOptions: true,
            //option values
            bedTimeVal: 0,
            endTimeVal: 0,
            startTimeVal: 0,
            //wage value
            wage: null
        }
    }

    handleNextJob = () => {
        debugger
        this.setState({ wage: null, displayWage: false, showKata: false, 
            showTitle: true, displayDropDownOptions: true });
    }

    handleTitleChange = () => {
        let isShowKata = this.state.showKata ? false : true;
        let isShowTitle = this.state.showTitle ? false : true;
        this.setState({ showKata: isShowKata, showTitle: isShowTitle, wage: null, displayWage: false});
    }

    handleOptionsChange = (key) => (e) => {
        e.preventDefault();
        let convertTarget = parseFloat(e.target.value);
        this.setState({[key]: convertTarget});
    }

    calculateNightlyWage = () => {
        const { 
            bedTimeVal, 
            endTimeVal, 
            startTimeVal 
        } = this.state
        let validateHours = startTimeVal > bedTimeVal || startTimeVal > endTimeVal || bedTimeVal > endTimeVal;
        let hoursAreNull = startTimeVal === null || bedTimeVal === null || endTimeVal === null;
        let hoursAreZero = startTimeVal === 0 || bedTimeVal === 0 || endTimeVal === 0;
        let areHoursNullOrZero = hoursAreNull || hoursAreZero;
        if(areHoursNullOrZero){
            return alert("Sorry, an error occured. Please make sure that all of your start, bed, and end times have been selected.");
        }

        if(validateHours){
            return alert("Sorry, an error occured. Please make sure that your hourly time-line is correct.");
        }

        this.calculate(startTimeVal, bedTimeVal, endTimeVal);

    }

    calculate = (startTime, bedTime, endTime) => {
        let wage;

        //start time to bed time wage, checking to see if downtime was after midnight
        if(bedTime > 12){
            let calcWage = this.afterMidnightStartToDownTime(startTime, endTime);
            wage = this.convertWageToDisplay(calcWage);
        } else {
            let startToDownTimeWage = this.calculateStartToDownTimeWage(startTime, bedTime);

            //down time to midnight wage, checking to see if downtime was after midnight
            let downTimeToMidnightWage = this.calculateDowntTimeToMidnightWage(bedTime);

            //after midnight wage
            let afterMidnightWage = this.calculateAfterMidnightWage(endTime);

            //add up wages
            let calcWage = this.calculateWages(startToDownTimeWage, downTimeToMidnightWage, afterMidnightWage);

            //convert to display
            wage = this.convertWageToDisplay(calcWage);
        }

        debugger
        //set state re render
        this.setState({ wage: wage, displayDropDownOptions: false, displayWage: true, 
            bedTimeVal: 0, endTimeVal: 0, startTimeVal: 0 });
    }

    afterMidnightStartToDownTime = (startTime, endTime) => {
        let startTimeToMidnight = (12 - startTime) * startToDownTimeRate;
        let afterMidnight = this.calculateAfterMidnightWage(endTime);
        let wage = startTimeToMidnight + afterMidnight;
        return wage;
    }

    convertWageToDisplay = (wage) => {
        return Number(wage);
    }

    calculateAfterMidnightWage = (endTime) => {
        let wage = endTime < 12 ? 0 : (endTime - 12) * afterMidnightRate;
        return wage;
    }

    calculateStartToDownTimeWage = (startTime, bedTime) => {
        let wage = (bedTime - startTime) * startToDownTimeRate;
        return wage;
    }

    calculateDowntTimeToMidnightWage = (bedTime) => {
        let wage = bedTime > 12 ? 0 : (12 - bedTime) * downTimeToMidnightRate;
        return wage;
    }

    calculateWages = (startToDownTimeWage, downTimeToMidnightWage, afterMidnightWage) => {
        return startToDownTimeWage + downTimeToMidnightWage + afterMidnightWage;
    }

    render(){
        const {
            wage,
            showKata,
            showTitle,
            displayWage,
            displayDropDownOptions
        } = this.state
        
        return(
            <Outer>
                {
                    showTitle
                    ?
                        <Title handleTitleChange={this.handleTitleChange}/>
                    :
                    null
                }
                {
                    showKata
                    ?
                        <div>
                            <FancyButton handleClick={this.handleTitleChange}>Instructions</FancyButton>
                            {
                                displayDropDownOptions
                                ?
                                    <div className="dropdown">
                                        {/* Start time dropdown */}
                                        <FancyDropdown onOptionChange={this.handleStartTimeChange} 
                                            title={startTimeTitle} 
                                            options={timeOptionsList}/>
                                        <FancyDropdown onOptionChange={this.handleBedTimeChange} 
                                            title={bedTimeTitle} 
                                            options={timeOptionsList}/>
                                        <FancyDropdown onOptionChange={this.handleEndTimeChange} 
                                            title={clockOffTitle} 
                                            options={timeOptionsList}/>
                                        <FancyButton handleClick={this.calculateNightlyWage}>Calculate Nightly Wage</FancyButton>
                                    </div>
                                :
                                    null
                            }
                            {
                                displayWage
                                ?
                                    <div>
                                        <h1>{`$${wage}`}</h1>
                                        <FancyButton className="anotherJobBtn" handleClick={this.handleNextJob}>Calculate Another Job?</FancyButton>
                                    </div>
                                :
                                    null
                            }
                        </div>
                        :
                        null
                }
            </Outer>
        )
    }
}