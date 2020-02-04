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
    {value: "", display:"Select a time"},
    {value: "5", display:"5pm"},
    {value: "5.5", display:"5:30pm"},
    {value: "6", display:"6pm"},
    {value: "6.5", display:"6:30pm"},
    {value: "7", display:"7pm"},
    {value: "7.5", display:"7:30pm"},
    {value: "8", display:"8pm"},
    {value: "8.5", display:"8:30pm"},
    {value: "9", display:"9pm"},
    {value: "9.5", display:"9:30pm"},
    {value: "10", display:"10pm"},
    {value: "10.5", display:"10:30pm"},
    {value: "11", display:"11pm"},
    {value: "11.5", display:"11:30pm"},
    {value: "12", display:"12am"},
    {value: "12.5", display:"12:30am"},
    {value: "13", display:"1am"},
    {value: "13.5", display:"1:30am"},
    {value: "14", display:"2am"},
    {value: "14.5", display:"2:30am"},
    {value: "15", display:"3am"},
    {value: "15.5", display:"3:30am"},
    {value: "16", display:"4am"}
];

export default class BabySitterKata extends PureComponent {
    constructor(props){
        super(props)
        this.handleStartTimeChange = this.handleOptionsChange('startTimeVal');
        this.handleBedTimeChange = this.handleOptionsChange('bedTimeVal');
        this.handleEndTimeChange = this.handleOptionsChange('endTimeVal');
        this.state = {
            showKata: false,
            showTitle: true,
            //option values
            bedTimeVal: null,
            endTimeVal: null,
            startTimeVal: null
        }
    }

    handleTitleChange = () => {
        let isShowKata = this.state.showKata ? false : true;
        let isShowTitle = this.state.showTitle ? false : true;
        this.setState({ showKata: isShowKata, showTitle: isShowTitle});
    }

    handleOptionsChange = (key) => (e) => {
        e.preventDefault();
        this.setState({[key]: e.target.value});
    }

    calculateNightlyWage = () => {
        const { bedTimeVal, endTimeVal, startTimeVal } = this.state
        let validateHours = startTimeVal > bedTimeVal || startTimeVal > endTimeVal || bedTimeVal > endTimeVal;
        let areHoursNullOrEmpty = startTimeVal === null || bedTimeVal === null || endTimeVal === null;
        debugger

        if(areHoursNullOrEmpty){
            return alert("Sorry, an error occured. Please make sure that all of your start, bed, and end times have been selected.");
        }

        if(validateHours){
            debugger
            return alert("Sorry, an error occured. Please make sure that your hourly time-line is correct.");
        }

    }

    render(){
        const {
            showKata,
            showTitle
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
            </Outer>
        )
    }
}