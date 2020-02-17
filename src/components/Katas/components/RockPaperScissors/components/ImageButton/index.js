import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

export default class ImageButton extends PureComponent{

    handleGameChange = (e) =>{
        this.props.handleChange(e);
    }

    render(){

        const {
            img,
            value
        } = this.props

        return(
            <Outer src={img} onClick={this.handleGameChange} value={value}/>
        )
    }
}