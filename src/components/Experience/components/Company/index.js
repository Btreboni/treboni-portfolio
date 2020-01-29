import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

export default class Company extends PureComponent{

    render(){

        const {
            id,
            alt,
            link,
            image
        } = this.props

        return(
            <Outer>
                <a href={link}><img src={image} id={id} alt={alt} /></a>
                {this.children}
            </Outer>
        )
    }
}