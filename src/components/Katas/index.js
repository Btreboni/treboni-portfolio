import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

//components
import BabySitterKata from './components/BabySitter'

export default class Katas extends PureComponent{
    constructor(props){
        super(props)
        this.renderBabySitterKata = this.handleKataChange('displayBabySitterKata')
        this.state = {
            displayBabySitterKata: false
        }
    }


    handleKataChange = (key, value) => {
        console.log(key, value);
        this.setState({ [key]: value})
    }

    render(){
        const {
            displayBabySitterKata
        } = this.state

        return(
            <Outer>
                <div className="buttonRow">
                    <button onClick={this.renderBabySitterKata}>
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