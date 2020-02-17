import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

export default class ImageButton extends PureComponent{

    handleGameChange = (e) =>{
        debugger
        this.props.handleChange(e);
    }

    render(){

        const {
            img,
            value
        } = this.props

        let test = this.props;
        console.log(test)

        return(
            <Outer src={img} onClick={this.handleGameChange} value={value}/>
        )
    }
}