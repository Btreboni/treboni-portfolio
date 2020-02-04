import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

export default class FancyButton extends PureComponent{

    handleClick = () => {
        this.props.handleClick();
    }

    render(){

        return(
            <Outer onClick={this.handleClick}>
                {this.props.children}
            </Outer>
        )
    }
}