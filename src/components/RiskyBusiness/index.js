import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//components
import FancyButton from '../FancyButton'

export default class RiskyBusiness extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            showLink: false,
            showTitle: true
        }
    }

    handleClick = () =>{
        this.setState({showTitle: true ? false : true});
    }

    handleLink = () =>{
        this.setState({showLink: true, showTitle: false});
    }

    sendIt = () =>{
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }

    render(){

        const {
            showLink,
            showTitle
        } = this.state
        return(
            <Outer>
                {
                    showTitle
                    ?
                    <div>
                        <h1>Risky Business</h1>
                        <h3>Full disclosure, clicking this button is risky.</h3>
                        <FancyButton handleClick={this.handleClick}>
                            You probably should not click me
                        </FancyButton>
                    </div>
                    :
                    showLink
                    ?
                    <div className={"last-chance"}> 
                        <h3>Last chance to turn back!</h3>
                        <FancyButton handleClick={this.sendIt}>
                            Abandon All Hope Ye Who Enter Here
                        </FancyButton>
                    </div>
                    :
                    <div className={"second-title"}>
                        <FancyButton handleClick={this.handleLink}>
                            You're sure you want to do this?
                        </FancyButton>
                    </div>
                }
            </Outer>
        )
    }
}