import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//components
import FancyButton from '../../../../../FancyButton'

export default class BabySitterTitle extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            showKata: false,
            showTitle: true
        }
    }

    handleTitleChange = () => {
        this.props.handleTitleChange();
    }

    render(){
        return(
            <Outer>
                <h1>Instructions</h1>
                <p>Babysitter Kata Background This kata simulates a babysitter working and getting paid for one night. 
                The rules are pretty straight forward.
                </p>
                <p>
                The babysitter:
                    <ul>
                        <li>
                            Starts no earlier than 5:00PM leaves no later than 4:00AM.
                        </li>
                        <li>
                            Gets paid $12/hour from start-time to bedtime.
                        </li>
                        <li>
                            Gets paid $8/hour from bedtime to midnight.    
                        </li>
                        <li>
                            Gets paid $16/hour from midnight to end of job.
                        </li>
                        <li>
                            Gets paid for full hours (no fractional hours). 
                        </li>
                        <li>
                            Feature As a babysitter In order to get paid for 1 night of work I want to 
                            calculate my nightly charge.
                        </li>
                    </ul>
                </p>
                <FancyButton handleClick={this.handleTitleChange}>Continue</FancyButton>
            </Outer>
        )
    }
}