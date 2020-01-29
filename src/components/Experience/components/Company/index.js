import React, { PureComponent}  from 'react'
import { map } from 'ramda'

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
            textList,
            fromDate
        } = this.props

        let displayList = function(){
            return <ul>
                {textList.map((item) => 
                    <li>{item}</li>
                )}
            </ul>
        }

        return(
            <Outer>
                <div class="join" id="photo">
                    <a href={link}><img src={image} id={id} alt={alt} /></a>
                    <p>{toDate} - {fromDate}</p>
                </div>
                <div class="join" id="text">
                  {displayList}  
                </div>
            </Outer>
        )
    }
}