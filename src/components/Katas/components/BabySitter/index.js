import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

//components
import PopupModal from '../InfoPopupModal'
import InfoPopupModal from '../InfoPopupModal';

export default class BabySitterKata extends PureComponent {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <Outer>
                <InfoPopupModal />
                <h1>TESTING</h1>
            </Outer>
        )
    }
}