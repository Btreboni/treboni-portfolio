import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

//components
import ImageButton from './components/ImageButton'
import WinLossRow from './components/WinLossRow'

//image sources
import paperImg from './images/paper.png'
import rockImg from './images/rock.png'
import scissorsImg from './images/scissors.png'

const rockObj = {
    id: 1,
    img: rockImg,
    title: "Rock"
};

const paperObj = {
    id: 2,
    img: paperImg,
    title: "Paper"
};

const scissorsObj = {
    id: 3,
    img: scissorsImg,
    title: "Scissors"
};


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
        this.setState({[key]: true})
    }

    renderRPCRow = (state) =>{
        if(state.rock || state.paper || state.scissors){
            return true;
        }

        return false;
    }

    userChoice = (state) =>{
        return state.rock ? rockObj : state.paper ? paperObj : scissorsObj
    }

    cpuChoice = () => {
        let choiceArr = [rockObj, paperObj, scissorsObj];
        return choiceArr[Math.floor(Math.random() * choiceArr.length)]
    }

    declareWinner = (user, cpu) => {
        // 0 draw, 1 user win, 2 cpu win
        debugger
        return user.id === cpu.id ? 0 : user.id === 1 && cpu.id === 3 ? 1 : user.id === 2 && cpu.id === 1 
        ? 1 : user.id === 3 && cpu.id === 2 ? 1 : 2;
    }

    clearSelection(){
        this.setState({rock: false, paper: false, scissors: false})
    }

    playAgain = () =>{
        this.setState({renderRPCRow: false, rock: false, paper: false, scissors: false})
    }

    render(){

        let renderRPCRow = this.renderRPCRow(this.state)
        let userChoice = renderRPCRow ? this.userChoice(this.state) : null;
        let cpuChoice = renderRPCRow ? this.cpuChoice(this.state) : null;
        let winner = renderRPCRow ? this.declareWinner(userChoice, cpuChoice) : null;
        debugger

        return(
            <Outer>
                {
                    renderRPCRow ?
                    <div className="winDiv">
                        <WinLossRow playAgain={this.playAgain} userChoice={userChoice} cpuChoice={cpuChoice} winner={winner}/>
                    </div>

                    :
                
                    <div>
                        <h1>Choose Rock, Paper, or Scissors</h1>
                        <ImageButton img={rockImg} handleChange={this.handleRock}/>
                        <ImageButton img={paperImg} handleChange={this.handlePaper}/>
                        <ImageButton img={scissorsImg} handleChange={this.handleScissors}/>
                    </div>
                    
                }
            </Outer>
        )
    }
}