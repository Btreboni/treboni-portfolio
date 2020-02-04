import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

//components
import FancyButton from '../../../FancyButton'
import Title from './components/BabySitterTitle'

export default class BabySitterKata extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            showKata: false,
            showTitle: true
        }
    }

    handleTitleChange = () => {
        let isShowKata = this.state.showKata ? false : true;
        let isShowTitle = this.state.showTitle ? false : true;
        this.setState({ showKata: isShowKata, showTitle: isShowTitle});
    }

    render(){
        const {
            showKata,
            showTitle
        } = this.state
        return(
            <Outer>
                {
                    showTitle
                    ?
                        <Title handleTitleChange={this.handleTitleChange}/>
                    :
                    null
                }
                {
                    showKata
                    ?
                        <div>
                            <FancyButton handleClick={this.handleTitleChange}>Instructions</FancyButton>
                        </div>
                        :
                        null
                }
            </Outer>
        )
    }
}