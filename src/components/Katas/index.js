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

    handleKataChange = (key) => (e) =>{
        debugger
        e.preventDefault()
        let test = e.target.value;
        debugger
        this.setState({ [key]: test})
    }

    render(){
        const {
            displayBabySitterKata
        } = this.state

        return(
            <Outer>
                <div className="buttonRow">
                    <button value={displayBabySitterKata ? false : true} onClick={this.change}>
                        BabySitterKata
                    </button>
                </div>
                { 
                displayBabySitterKata 
                ?
                    <div className="kataRow">
                        <BabySitterKata />
                    </div> 
                : 
                    null
                }
            </Outer>
        )
    }
}