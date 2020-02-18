import React from 'react'

//styled
import Outer from './styled/Outer'

export default props => {
        return(
            <Outer>
                <div className="buttonRow">
                    <button><a href="/babySitterKata">Baby Sitter Calculator</a></button>
                    <button><a href="/rockPaperScissorsKata">Rock Paper Scissors</a></button>
                    <button><a href="/stockPriceAvg">Average Stock Price Calculator</a></button>
                </div>
            </Outer>
        )
}