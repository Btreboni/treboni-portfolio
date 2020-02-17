import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

//components
import BabySitterKata from './components/BabySitter'


export default class Katas extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){

        return(
            <Outer>
                <div className="buttonRow">
                    <button className="kataListButton"><a href="/babySitterKata">Baby Sitter Calculator Kata</a></button>
                </div>
            </Outer>
        )
    }
}