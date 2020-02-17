import React from 'react'

//styled
import Outer from './styled/Outer'

//components
import BabySitterKata from './components/BabySitter'


export default props => {
        return(
            <Outer>
                <div className="buttonRow">
                    <button><a href="/babySitterKata">Baby Sitter Calculator</a></button>
                    <button><a href="/rockPaperScissorsKata">Rock Paper Scissors</a></button>
                </div>
            </Outer>
        )
}