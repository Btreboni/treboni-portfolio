import React, { PureComponent}  from 'react'

//styled
import Outer from './styled/Outer'

export default class Company extends PureComponent{

    displayRoles = () => {
        let textList = this.props.textList;
        return <ul>
            {textList.map((text) => 
                <li key={text.key}>{text.description}</li>
            )}
        </ul>
    }

    displayTech = () => {
        let techList = this.props.techList;
        return <ul>
            {techList.map((tech) => 
            <li key={tech.key}>{tech.description}</li>)}
        </ul>
    }

    render(){

        const {
            id,
            alt,
            link,
            city,
            state,
            image,
            toDate,
            fromDate,
            techList
        } = this.props

        let displayRoles = this.displayRoles();
        let displayTech = techList ? this.displayTech() : '';

        return(
            <Outer>
                <div className="table">
                    <div className="table-row">
                        <div className="table-cell" id="photo">
                            <a href={link}><img src={image} id={id} alt={alt} /></a>
                            <div className="dateLocation">
                                <p>{toDate} - {fromDate}</p>
                                <p>{city}, {state}</p>
                            </div>
                        </div>
                        <div className="table-cell" id="text">
                            <h4>Description</h4>
                            {displayRoles}
                            {
                                displayTech
                                ?
                                <div>
                                    <h4>Languages and Frameworks</h4>
                                    {displayTech} 
                                </div> 
                                :
                                ''
                            }
                        </div>
                    </div>
                </div>
            </Outer>
        )
    }
}