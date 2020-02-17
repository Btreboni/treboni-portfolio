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

    handleChange = (key) => (e) => {
        let test = key;
        let testt = e.target.value;
        debugger
        this.setState({[key]: true})
    }

    // clearSelection(){
    //     this.setState({rock: false, paper: false, scissors: false})
    // }

    render(){
    
        console.log(this.state)
        return(
            <Outer>
                <ImageButton img={rock} handleChange={this.handleRock}/>
                <ImageButton img={paper} handleChange={this.handlePaper}/>
                <ImageButton img={scissors} handleChange={this.handleScissors}/>
            </Outer>
        )
    }
}