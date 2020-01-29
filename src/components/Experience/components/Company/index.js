import React, {PureComponent} from 'react'

//styled
import Outer from './styled/Outer'

export default class Company extends PureComponent{

    render(){

        const {
            id,
            alt,
            link,
            image,
            toDate,
            fromDate,
            children
        } = this.props

        return(
            <Outer>
                <div class="join" id="photo">
                    <a href={link}><img src={image} id={id} alt={alt} /></a>
                    <p>{toDate} - {fromDate}</p>
                </div>
                <div class="join" id="text">
                    <p>{children}</p>
                </div>
            </Outer>
        )
    }
}