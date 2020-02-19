import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

export default class FancyInput extends PureComponent{
    constructor(props){
        super(props)
        this.state={}
    }

    handleChange = (e) => {
        this.props.handleChange(e);
    }
    render(){
        const {
            name,
            title,
            placeholder
        } = this.props

        return(
            <Outer> 
                <h5>{title}</h5>
                <input name={name} placeholder={placeholder} onChange={this.handleChange}/>
            </Outer>
        )
    }
}