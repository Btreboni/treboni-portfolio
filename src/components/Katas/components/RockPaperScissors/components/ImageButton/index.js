import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

export default class ImageButton extends PureComponent{
    constructor(props){
        super(props)
        this.state = {};
    }

    handleGameChange(){
        debugger
        console.log('test');
        // this.props.handleChange()
    }

    render(){

        let test = this.props;
        debugger

        const {
            img,
            width,
            height
        } = this.props


        return(
            <Outer src={img} width={width} height={height} onClick={this.handleGameChange}/>
        )
    }
}