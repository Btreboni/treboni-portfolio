import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

//components
import PopupModal from '../InfoPopupModal'

export default class BabySitterKata extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            showKata: false,
            showTitle: true
        }
    }

    handleTitleChange = () => {
        let isShowKata = this.state.showKata ? false : true;
        let isShowTitle = this.state.showTitle ? false : true;
        debugger
        this.setState({ showKata: isShowKata, showTitle: isShowTitle});
    }

    render(){
        const {
            showKata,
            showTitle
        } = this.state
        return(
            <Outer>
                <h2>Instructions</h2>
                {
                    showTitle
                    ?
                        <div>
                            <p>Babysitter Kata Background This kata simulates a babysitter working and getting paid for one night. 
                            The rules are pretty straight forward.
                            The babysitter:
                            starts no earlier than 5:00PM leaves no later than 4:00AM gets paid $12/hour from start-time to bedtime 
                            gets paid $8/hour from bedtime to midnight gets paid $16/hour from midnight to end of job gets paid for 
                            full hours (no fractional hours) Feature As a babysitter In order to get paid for 1 night of work I want 
                            to calculate my nightly charge
                            </p>
                            <button onClick={this.handleTitleChange}>Continue</button>
                        </div>
                    :
                    null
                }
                {
                    showKata
                    ?
                        <div>
                            <button onClick={this.handleTitleChange}>Instructions</button>
                        </div>
                        :
                        null
                }
            </Outer>
        )
    }
}