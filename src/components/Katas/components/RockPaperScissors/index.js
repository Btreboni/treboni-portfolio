import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

//components
import ImageButton from './components/ImageButton'

//image sources
import paper from './images/paper.png'
import rock from './images/rock.png'
import scissors from './images/scissors.png'


export default class RockPaperScissors extends PureComponent{
    constructor(props){
        super(props)
        this.handleRock = this.handleChange('rock')
        this.handlePaper = this.handleChange('paper')
        this.handleScissors = this.handleChange('scissors') 
        this.state={
            rock: false,
            paper: false,
            scissors: false
        }
    }

    handleChange = (key) => {
        this.setState({key: true})
    }

    // clearSelection(){
    //     this.setState({rock: false, paper: false, scissors: false})
    // }

    render(){
        return(
            <Outer>
                <ImageButton img={rock} width={100} height={100} onClick={this.handleRock}/>
                <ImageButton img={paper} width={100} heigh={100} onClick={this.handlePaper}/>
                <ImageButton img={scissors} width={125} heigh={125} onClick={this.handleScissors}/>
            </Outer>
        )
    }
}