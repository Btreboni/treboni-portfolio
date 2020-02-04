import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

//components
import BabySitterKata from './components/BabySitter'

export default class Katas extends PureComponent{
    constructor(props){
        super(props)
        this.change = this.handleKataChange('displayBabySitterKata');
        this.state = {
            displayBabySitterKata: false
        }
    }

    handleKataChange = (key) => (e) => {
        debugger
        e.preventDefault();
        let test = e.target.value;
        debugger
        this.setState({ [key]: test});
    }

    hideKatas = () => {
        this.setState({displayBabySitterKata: false});
    }

    render(){
        const {
            displayBabySitterKata
        } = this.state

        console.log("Render Function: " + displayBabySitterKata);

        return(
            <Outer>
                {
                !displayBabySitterKata
                ?
                <div className="buttonRow">
                    <button value={displayBabySitterKata ? false : true} onClick={this.change}>
                        BabySitterKata
                    </button>
                </div>
                :
                    null
                }
                { 
                displayBabySitterKata 
                ?
                    <div className="kataRow">
                        <button onClick={this.hideKatas}>Back to Katas List</button>
                        <BabySitterKata />
                    </div> 
                : 
                    null
                }
            </Outer>
        )
    }
}