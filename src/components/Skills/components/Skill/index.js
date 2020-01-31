import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

export default class Skill extends PureComponent {

    render(){

        const {
            id,
            title,
            width,
            height,
            source
        } = this.props

        return(
            <Outer>
                <div className={"box"}> 
                    {/* <h3>{title}</h3> */}
                    <img src={source} 
                        id={id} 
                        alt="logo" 
                        width={width} 
                        height={height}/>
                </div>
            </Outer>
        )
    }
}