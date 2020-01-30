import React, { PureComponent}  from 'react'

//styled
import Outer from './styled/Outer'

export default class Company extends PureComponent{

    displayList = () => {
        debugger
        let textList = this.props.textList;
        return <ul>
            {textList.map((item) => 
                <li>{item}</li>
            )}
        </ul>
    }

    render(){

        const {
            id,
            alt,
            link,
            image,
            toDate,
            fromDate
        } = this.props

        let displayList = this.displayList();

        return(
            <Outer>
                <div className="tableRow">
                    <div className="join" id="photo">
                        <a href={link}><img src={image} id={id} alt={alt} /></a>
                        <p>{toDate} - {fromDate}</p>
                    </div>
                    <div className="join" id="text">
                    {displayList}  
                    </div>
                </div>
            </Outer>
        )
    }
}