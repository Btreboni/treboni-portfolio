import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

export default class FancyDropdown extends PureComponent{

    handleOptionChange = (e) => {
        this.props.onOptionChange(e);
    }

    render(){

        const {
            id,
            options,
            title
        } = this.props

        return(
            <Outer>
                <h3>{title}</h3>
                <select onChange={this.handleOptionChange}>
                    {options.map((selection) => {
                        return(
                        <option  id={id}
                            key={selection.value} 
                            value={selection.value}>
                                {selection.display}
                        </option>
                        )
                    })}
                </select>
            </Outer>
        )
    }
}