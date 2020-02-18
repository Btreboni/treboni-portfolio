import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'
import Wrapper from './styled/Wrapper'

//components
import FancyButton from "../../../../../FancyButton"

export default class WinLossRow extends PureComponent{
    constructor(props){
        super(props)
        this.state={}
    }

    playAgain = () =>{
        this.props.playAgain()
    }

    render(){
        const {
            userChoice,
            cpuChoice,
            winner
        } = this.props
        let displayWinner = winner === 0 ? "It's a drawl!" : winner === 1 ? "You won! Congrats!" : "You lost!"
        return(
            <Outer>
                <FancyButton handleClick={this.playAgain}>Play Again</FancyButton>
                <Wrapper>
                    <div className="choice">
                        <h2>You Chose:</h2>
                        <h2>{userChoice.title}</h2>
                        <img src={userChoice.img} width={200} height={200}/>
                    </div>
                    <div className="choice">
                        <h2>CPU Chose:</h2>
                        <h2>{cpuChoice.title}</h2>
                        <img src={cpuChoice.img} width={200} height={200}/>
                    </div>
                </Wrapper>
                <h1>{displayWinner}</h1>
            </Outer>
        )
    }
}