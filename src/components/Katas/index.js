import React, {PureComponent} from 'react'

import Outer from './styled/Outer'

export default class Katas extends PureComponent{
    constructor(props){
        super(props)
        this.state = {}
    }

    renderBabySitterKata(){
        this.props.renderBabySitterKata();
    } 

    render(){
        return(
            <Outer>
                <ul>
                    <li>
                        <button onClick={this.props.renderBabySitterKata}>
                            BabySitterKata
                        </button>
                    </li>
                </ul>
            </Outer>
        )
    }
}